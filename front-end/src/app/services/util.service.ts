import { Inject, Injectable, Injector, Renderer2, RendererFactory2 } from '@angular/core';
import { IIndexable } from '../models/base.model';
import { Md5 } from 'ts-md5/dist/md5';
import { LookupItem } from './lookup.service';
import { Usuario } from '../models/usuario.model';
import * as moment from 'moment';
import { DaoBaseService } from '../dao/dao-base.service';
import { MaskApplierService } from 'ngx-mask';
import { DOCUMENT } from '@angular/common';
import { AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

export type Interval = {start: Date | number, end: Date | number};
export type DateInterval = {start: Date, end: Date};
export type TimeInterval = {start: number, end: number};
export type MergeArrayAction = "ADD" | "EDIT" | "DELETE";
export type MergeArrayCompare = ((dst: any, source: any) => boolean) | string;
export type MergeArrayInsertOrHandler = (actionOrSrc: MergeArrayAction | any, dst?: any, src?: any) => any;
export type MergeArrayUpdate = (dst: any, src: any) => void;
export type MergeArrayRemove = (dst: any) => boolean;

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public static readonly ISO8601_VALIDATE = /^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))((T|\s)(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9])(:(0[0-9]|[1-5][0-9])(\.([0-9]{3}|[0-9]{6}))?)?)?Z?$/;
  public static readonly ISO8601_FORMAT = "YYYY-MM-DDTHH:mm:ss";
  public static readonly TIME_VALIDATE = /^(([01][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?)|(24:00(:00)?)$/;

  public maskService: MaskApplierService;
  public auth: AuthService;
  private renderer: Renderer2;

  constructor(public injector: Injector, @Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.maskService = injector.get<MaskApplierService>(MaskApplierService);
    this.auth = injector.get<AuthService>(AuthService);
    this.maskService.thousandSeparator = ".";
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public copyToClipboard(text: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  public clone(source: any): any {
    if(typeof source == "object") {
      if(Array.isArray(source)) {
        return source.map(x => this.clone(x));
      } else if(source instanceof Date) {
        return new Date(source.getTime());
      } else {
        let result: IIndexable = {};
        for (let [key, value] of Object.entries(source)) {
          result[key] = this.clone(value);
        }
        return result;
      }
    } else {
      return source;
    }
  }

  public round(num: number, decimal: number) {
    const factor = Math.pow(10, decimal);
    return Math.round((num + Number.EPSILON) * factor) / factor;
  }

  public avg(array: number[]) {
    var i = 0, summ = 0, arrayLen = array.length;
    while (i < arrayLen) {
        summ = summ + array[i++];
    }
    return summ / arrayLen;
  }

  public max(array: number[]){
    var result = array.reduce(function(a, b) {
      return Math.max(a, b);
    }, -Infinity);
    return result;
  }

  public trunc(num: number, decimal: number) {
    const factor = Math.pow(10, decimal);
    return Math.trunc((num + Number.EPSILON) * factor) / factor;
  }

  public strZero(num: number | string, size: number) {
    return Array(Math.max(size - num.toString().length, 0)).join('0')+num;
  }

  public format(value: any, mask: string): string {
    return this.maskService.applyMask(value.toString(), mask);
  }

  public formatDecimal(value: any, decimals: number = 2): string {
    return this.maskService.applyMask(value.toString(), "separator." + decimals);
  }

  public getNested(source: IIndexable, path: string): any {
    return path.replace(/\[/g, '.').replace(/\]/g, '.').replace(/^\./g, "").split('.').filter(x => x.length).reduce((a, o)=> a && a[Array.isArray(a) && !isNaN(+o) ? parseInt(o) : o], source);
  }

  public setNested(source: IIndexable, path: string, value: any) {
    let tree = path.replace('[', '.').replace(']', '.').replace(/^\./g, "").split('.');
    let leaf = tree.pop();
    let last = tree.reduce((a, o)=> a[Array.isArray(a) ? parseInt(o) : o], source);
    if(last && leaf) last[leaf] = value;
    return
  }

  public validateLookupItem(lista: LookupItem[], key: any): boolean | undefined {
    return !lista.find(x => x.key == key) && key != 'd41d8cd98f00b204e9800998ecf8427e'; //MD5 gerado quando o VALUE é vazio ("");
    /* GENISSON: Não entendi o código abaixo, e substitui pelo código acima
    let retorno = true;
    if(key.indexOf(lista)<0) {
      lista.forEach(t => {
        if(t.key==key || key=='d41d8cd98f00b204e9800998ecf8427e') {//MD5 gerado quando o VALUE é vazio ("");
          retorno = false;
        }
        else true;
      })
    }else if(key=='d41d8cd98f00b204e9800998ecf8427e') retorno=false; //MD5 gerado quando o VALUE é vazio ("");
    //console.log(retorno);
    return retorno;*/
  }

  public commonBegin(strA: string | string[], strB: string | string[]) {
    let result: string[] = [];
    let a = Array.isArray(strA) ? strA : strA.split("");
    let b = Array.isArray(strB) ? strB : strB.split("");
    const maxIndex: number = Math.min(a.length, b.length);
    for(let i = 0; i < maxIndex && a[i] == b[i]; i++) result.push(a[i]);
    return Array.isArray(strA) ? result : result.join();
  }

  public validarCPF(numero: string){
    if (typeof numero !== 'string') return false;
    numero = numero.replace(/[^\d]+/g, '');
    if (numero.length !== 11 || !!numero.match(/(\d)\1{10}/)) return false;
    let cpf = numero.split('');
    const validator = cpf
        .filter((digit, index, array) => index >= array.length - 2 && digit)
        .map(el => +el);
    const toValidate = (pop: number) => cpf
        .filter((digit, index, array) => index < array.length - pop && digit)
        .map(el => +el);
    const rest = (count: number, pop: number) => (toValidate(pop)
        .reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11 % 10;
    return !(rest(10,2) !== validator[0] || rest(11,1) !== validator[1]);
  }

  public validarEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  public onlyNumbers(text: string): string {
    return text ? [...text].filter(c => /[0-9]/.test(c)).join("") : "";
  }

  public onlyAlphanumeric(url: string): string {
    return url.replace(/[^a-z0-9]/gi, '');
  }

  public fill(destination: any, source: any): any {
    if(destination) {
      Object.keys(destination).forEach(key => {
        if(Array.isArray(destination[key]) && source && source[key] && Array.isArray(source[key])) {
          destination[key].push(...source[key]);
        } else if(typeof destination[key] == "object" && source && typeof source[key] !== "undefined" && source[key] && !(destination[key] instanceof Date) && !(source[key] instanceof Date)) {
          destination[key] = this.fill(destination[key], source[key]);
        } else if(source && typeof source[key] !== "undefined"){
          destination[key] = source[key];
        }
      });
    }
    return destination;
  }

  public assign(destination: any, source: any): any {
    if(destination) {
      const keys = Object.keys(destination);
      keys.forEach(key => {
        if(Array.isArray(destination[key]) && source && source[key] && Array.isArray(source[key])) {
          destination[key] = [...source[key]];
        } else if(typeof destination[key] == "object" && source && typeof source[key] !== "undefined" && source[key] && !(destination[key] instanceof Date) && !(source[key] instanceof Date)) {
          destination[key] = this.assign(destination[key], source[key]);
        } else if(source && typeof source[key] !== "undefined"){
          destination[key] = source[key];
        }
      });
      Object.entries(source || {}).forEach(([key, value]) => {
        if(!keys.includes(key)) destination[key] = value;
      });
    }
    return destination;
  }

  public getParameters(func: any) {
    return typeof func == "function" ? new RegExp('(?:'+func.name+'\\s*|^)\\s*\\((.*?)\\)').exec(func.toString().replace(/\n/g, ''))![1].replace(/\/\*.*?\*\//g, '').replace(/ /g, '') : [];
  }

  public mergeArrayOfObject(destination: IIndexable[], source: IIndexable[], compare: MergeArrayCompare, removeDst: boolean = true, insertOrHandler?: MergeArrayInsertOrHandler, update?: MergeArrayUpdate, remove?: MergeArrayRemove) {
    const isHandler = insertOrHandler && this.getParameters(insertOrHandler).length > 1;
    for(let src of source) {
      let dst = destination.find(x => typeof compare == "string" ? x[compare] == src[compare] : compare(x, src));
      if(dst) { /* Update*/
        if(update) {
          update(dst, src)
        } else if(isHandler) {
          insertOrHandler!("EDIT", dst, src);
        } else {
          Object.assign(dst, src);
        }
      } else { /* Insert */
        let add = insertOrHandler ? (isHandler ? insertOrHandler("ADD", undefined, src) : insertOrHandler(src)) : src;
        if(add) destination.push(add);
      }
    }
    if(removeDst) {
      for(let i = 0; i < destination.length; i++){
        let dst = destination[i];
        if(!source.find(x => typeof compare == "string" ? x[compare] == dst[compare] : compare(dst, x))) {
          let splice = remove ? remove(dst) : isHandler ? insertOrHandler!("DELETE", dst) : true;
          if(splice) {
            destination.splice(i, 1);
            i--;
          }
        }
      }
    }
    return destination;
  }

  public writeToFile(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  public md5(text?: string): string {
    return Md5.hashStr(text || Math.random().toString());
  }

  public fillForm(destination: any, source: any): any {
    if(source) {
      Object.keys(destination).forEach(key => {
        if(typeof source[key] != "undefined"){
          destination[key] = source[key];
        } else if(key.indexOf("_") > 0 && typeof source[key.substr(0, key.indexOf("_"))] !== "undefined") {
          let subprop = source[key.substr(0, key.indexOf("_"))];
          if(subprop && typeof subprop[key.substr(key.indexOf("_") + 1)] !== "undefined"){
            destination[key] = subprop[key.substr(key.indexOf("_") + 1)];
          }
        } else if(key.indexOf("$") > 0) {
          const field = key.substr(0, key.indexOf("$"));
          const value = key.substr(key.indexOf("$")+1);
          destination[key] = !!(source[field]?.indexOf(value) >= 0);
        } else if(typeof destination[key] ==  "object" && typeof source[key] != "undefined"){
          if(Array.isArray(destination[key])){
            destination[key] = Object.entries(source).filter(([k, v]) => k.startsWith(key) && v).map(([k, v]) => k) || [];
          } else {
            Object.keys(destination[key]).forEach(subKey => {
              if(typeof source[key + "_" + subKey] !== "undefined"){
                destination[key][subKey] = source[key + "_" + subKey];
              }
            });
          }
        }
      });
    }
    return destination;
  }

  public empty(data: any): boolean{
    if(data == null || data == undefined) return true;
    if(typeof data == "string") return !data.length;
    if(typeof data == "object" && data instanceof Date) return (typeof data.getMonth !== 'function') || data <= new Date(0);
    return false;
  }

  public deepEach(collection: any[] | object, eachAndNextEach: (item: any, index?: string | number, source?: any[] | object, path?: (string | number)[]) => any[] | undefined | void, removeUndefined = false, path: (string | number)[] = []) {
    if(collection){
      for(let [key, value] of Array.isArray(collection) ? collection.entries() : Object.entries(collection)) {
        let pathCurrent = [...path, key];
        let nextItems = eachAndNextEach(value, key, collection, pathCurrent);
        if(removeUndefined && nextItems == undefined) {
          if(Array.isArray(collection)) {
            delete (collection as any[])[key as number];
          } else {
            delete (collection as IIndexable)[key as string];
          }
        }
        if(nextItems) this.deepEach(nextItems, eachAndNextEach, removeUndefined, pathCurrent);
      }
    }
  }

  public removeAcentos(source: string): string {
    const comAcentos = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    const semAcentos = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    return [...source].map(c => {
      let index = comAcentos.indexOf(c);
      return index >= 0 ? semAcentos[index] : c;
    }).join("");
  }

  public textHash(text: string): string {
    return this.md5(this.removeAcentos(text.toLowerCase()));
  }

  public apelidoOuNome(usuario: Usuario | undefined, capitalize: boolean = false): string | undefined {
    const name = usuario?.apelido?.length ? usuario.apelido : usuario?.nome || "";
    return name && capitalize ? this.capitalCase(name) : name;
  }

  public shortName(name: string): string {
    let temp = name.replace(/\s\s+/g, " ").split(" ");
    let result = "";
    for(let nibble of temp) {
      result += result.length < 5 ? " " + nibble[0].toUpperCase() + nibble.substring(1).toLowerCase() : "";
    }
    return result.trim();
  }

  public capitalCase(text: string): string {
    return text.toLowerCase().replace(/(^\w|\.\w|\s\w)/g, (letter) => letter.toUpperCase());
  }

  public contrastColor(bgColor: string) {
    const color = this.colorHexToRGB(bgColor);
    return (((color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114)) > 186) ? "#000000" : "#ffffff";
  }

  public colorHexToRGB(colorHex: string) {
    const color = (colorHex.charAt(0) === '#') ? colorHex.substring(1, 7) : colorHex;
    return {
      r: parseInt(color.substring(0, 2), 16),
      g: parseInt(color.substring(2, 4), 16),
      b: parseInt(color.substring(4, 6), 16)
    }
  }

  public isTimeValid(timer: string): boolean {
    return UtilService.TIME_VALIDATE.test(timer);
  }

  public isDataValid(data: any): boolean {
    const dataRef = !!data && typeof data == "string" ? new Date(data) : data;
    return !!dataRef && (moment(dataRef).isValid() || (Object.prototype.toString.call(dataRef) === '[object Date]' && !isNaN(dataRef)));
  }

  public isDeveloper(): boolean {
    return this.auth.usuario?.perfil?.nome == 'Desenvolvedor';
  }

  public decimalToTimer(value: number, onlyHours: boolean = false, hoursPerDay: number = 24) {
    const hours = onlyHours ? Math.trunc(value) : Math.trunc(value) % hoursPerDay;
    const minutes =  Math.round((value % 1) * 60);
    const days = onlyHours ? 0 : Math.trunc(value - hours) / hoursPerDay;
    return {days, hours, minutes};
  }

  public decimalToTimerFormated(value: number | undefined, onlyHours: boolean = false, hoursPerDay: number = 24) {
    let result = "";
    if(value !== undefined) {
      const timer = this.decimalToTimer(value, onlyHours, hoursPerDay);
      result += timer.days ? timer.days + (timer.days == 1 ? " dia" : " dias") : "";
      result += timer.hours ? (timer.days ? ", " : "") + this.strZero(timer.hours, 2) + "h" : "";
      result += timer.minutes ? (timer.days && !timer.hours ? ", " : "") + this.strZero(timer.minutes, 2) + "min" : "";
      result += !result.length ? " - Zero - " : "";
    }
    return result;
  }

  public between(middle: Date | number, interval: Interval): boolean {
    const start = typeof interval.start == "number" ? interval.start : interval.start.getTime();
    const end = typeof interval.end == "number" ? interval.end : interval.end.getTime();
    middle = typeof middle == "number" ? middle : middle.getTime();
    return middle >= start && middle <= end;
  }

  public asDateInterval(interval: Interval): DateInterval {
    return {
      start: interval.start instanceof Date ? interval.start : new Date(interval.start),
      end: interval.end instanceof Date ? interval.end : new Date(interval.end)
    };
  }

  public asTimeInterval(interval: Interval): TimeInterval {
    return {
      start: interval.start instanceof Date ? interval.start.getTime() : interval.start,
      end: interval.end instanceof Date ? interval.end.getTime() : interval.end
    };
  }

  public intersection(intervals: Interval[]): Interval | undefined {
    const isDate = (intervals[0])?.start instanceof Date;
    let result: TimeInterval | undefined = undefined;
    if(intervals.length > 1) {
      result = this.asTimeInterval(intervals[0]);
      for(let i = 1; i < intervals.length && result; i++) {
        const compare = this.asTimeInterval(intervals[i]);
        result = result.end >= compare.start && result.start <= compare.end ? {
          start: Math.max(result.start, compare.start),
          end: Math.min(result.end, compare.end)
        } : undefined;
      }
    }
    return result && isDate ? this.asDateInterval(result) : result;
  }

  public union(intervals: Interval[]) : Interval[] {
    if(intervals.length < 2){
        return intervals;
    } else {
        const isDate = (intervals[0])?.start instanceof Date;
        let intervalos: TimeInterval[] = intervals.map(x => this.asTimeInterval(x));
        let result: TimeInterval[] = [];
        result.push(intervalos[0]);
        intervalos.shift();
        for(let i = 0; i < result.length; i++) {
            for(let j = 0; j < intervalos.length; j++) {
                if(result[i].end >= intervalos[j].start && result[i].start <= intervalos[j].end) {
                    result[i] = {start: Math.min(result[i].start, intervalos[j].start),
                                 end: Math.max(result[i].end, intervalos[j].end)};
                    intervalos.splice(j, 1);
                    j = -1;
                } 
            }
            if(intervalos.length) {
              result.push(intervalos[0]);
              intervalos.shift();
            }
        }
        return isDate ? result.map(x => this.asDateInterval(x)) : result;
    }
  }

  public merge(aItems: any[] | undefined, bItems: any[] | undefined, role: (a: any, b: any) => boolean): any[] {
    let result = [...(aItems || [])];
    (bItems || []).forEach(b => {
      if(!result.find(a => role(a, b))) result.push(b);
    });
    return result;
  }

  public getDateFormatted(dataHora: any): string{
    return dataHora ? moment(dataHora).format("DD/MM/YYYY") : "";
  }

  public getBooleanFormatted(n: number): string{
    return n == 0 ? "não" : "sim";
  }

  public getTimeFormatted(dataHora: any): string{
    return dataHora ? moment(dataHora).format("HH:mm") : "";
  }

  public getTimeFormattedUSA(dataHora: any): string{
    return dataHora ? moment(dataHora).format("YYYY-MM-DD HH:mm:ss") : "";
  }

  public getDateTimeFormatted(dataHora: any, separator: string = " "): string{
    if(!dataHora) {
      return "";
    } else if((dataHora instanceof Date) || (typeof dataHora == "string" && dataHora.match(UtilService.ISO8601_VALIDATE))){
      return this.getDateFormatted(dataHora) + separator + this.getTimeFormatted(dataHora);
    } else {
      return JSON.stringify(dataHora);
    }
  }

  public static dateToIso8601(date: Date): string {
    return moment(date).format(UtilService.ISO8601_FORMAT);
  }

  /* Obrigatoriamente deve conter a hora, mesmo que seja T00:00:00 */
  public static iso8601ToDate(iso8601: string): Date {
    //const hasTimeZone = /([+-]\d\d(:?\d\d)?)|Z$/g;
    let date = new Date(iso8601);
    return date;
    //const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    //return new Date(date.getTime() + userTimezoneOffset);
  }

  public timestamp(dateRef: Date): number {
    const userTimezoneOffset = dateRef.getTimezoneOffset() * 60000;
    return Math.floor((dateRef.getTime() - userTimezoneOffset) / 1000);
  }
/**  */
  public daystamp(dateRef: Date): number {
    const userTimezoneOffset = dateRef.getTimezoneOffset() * 60000;
    return Math.floor((dateRef.getTime() - userTimezoneOffset) / (1000 * 60 * 60 * 24));
  }

  public setTime(dateRef: Date, hour: number, min: number, sec: number): Date {
    const result = new Date(dateRef.getTime());
    result.setHours(hour, min, sec);
    return result;
  }

  public setStrTime(dateRef: Date, time: string): Date {
    const aTime = time.split(":").map(x => parseInt(x));
    return this.setTime(dateRef, aTime[0] || 0, aTime[1] || 0, aTime[2] || 0);
  }

  /* Caso dateTime seja numérico deverá representar um intervalo, e não o .getTime() de uma data */
  public getTimeHours(dateTime: Date | number): number {
    const userTimezoneOffset = (new Date()).getTimezoneOffset() * 60000; // recupera o fuso horário em milisegundos
    const dateRef = dateTime instanceof Date ? dateTime : new Date(dateTime == 0 ? "0" : dateTime + userTimezoneOffset);
    return dateRef.getHours() + (dateRef.getMinutes() / 60) + (dateRef.getSeconds() / (60*60));
  }

  public secondsToTimer(secounds: number) {
    return {
      hours: Math.floor(secounds / 3600),
      minutes: Math.floor(secounds % 3600 / 60),
      secounds: Math.floor(secounds % 3600 % 60)
    };
  }

  public getHoursBetween(start: Date | number, end: Date | number): number {
    const timestamp = Math.floor(((end instanceof Date ? end.getTime() : end) - (start instanceof Date ? start.getTime() : start)) / 1000);
    const timer = this.secondsToTimer(timestamp);
    return timer.hours + (timer.minutes / 60) + (timer.secounds / (60*60));
  }

  public getStrTimeHours(time: string): number {
    const aTime = time.split(":").map(x => parseInt(x));
    return aTime[0] + ((aTime[1] || 0) / 60) + ((aTime[2] || 0) / (60*60));
  }

  public addTimeHours(dateRef: Date, hours: number): Date {
    let result = new Date(dateRef.getTime());
    result.setTime(result.getTime() + (hours * 60 * 60 * 1000));
    return result;
  }

  public startOfDay(dateRef: Date) {
    return this.setTime(dateRef, 0, 0, 0);
  }

  public endOfDay(dateRef: Date) {
    return this.setTime(dateRef, 23, 59, 59);
  }

  public minDate(...dates: (Date | undefined | null)[]): Date | undefined | null {
    return dates.reduce(function (a, b) { return !a || !b ? a || b : (a.getTime() < b.getTime() ? a : b); });
  }

  public maxDate(...dates: (Date | undefined | null)[]): Date | undefined | null {
    return dates.reduce(function (a, b) { return !a || !b ? a || b : (a.getTime() > b.getTime() ? a : b); });
  }

  public loadScript(src: string): any {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(this.document.body, script);
    return script;
  }

  public clearControl(control: FormControl | AbstractControl, value: any = null) {
    control.setValue(value);
    control.setErrors(null);
    control.markAsUntouched();
  }

  /**
   * 
   * @param strJson Uma string no formato JSON
   * @returns       Um objeto correspondente à string JSON com todos os seus valores 
   *                no formato de objetos, transformando-se todos os níveis internos das strings JSON.
   */
  public friendlyJson(strJson: string): Object {
    let obj = JSON.parse(strJson);
    Object.entries(obj).forEach((element, index, array) => {
      let key: string = (element as string[])[0];
      let value: string | Object = (element as any[])[1];
      if(value != null && (typeof(value) == 'object' || (this.isStrJson(value) && !['boolean','number'].find(e => e == typeof(value))))) {
        obj[key] = typeof(value) == 'string' ? this.friendlyJson(JSON.stringify(JSON.parse(value))) : this.friendlyJson(JSON.stringify(value));
      }
    });
    return obj;
  }

  /**
   * 
   * @param str Uma string para ser avaliada se está ou não no formato JSON
   * @returns   Um booleano sobre a validade do parâmetro como string JSON
   */
  public isStrJson(str: string): boolean {
    try { JSON.parse(str); } catch (e) { return false; } return true;
  }

  /**
   * 
   * @param obj Um objeto no formato {key: value}, onde key deve ser string, e 
   *            value pode ser null | boolean | string | object. Se value for object, a função é chamada
   *            recursivamente pra ele. 
   * @returns   Um array no formato [...[key, value]], onde key é uma string e 
   *            value pode ser boolean | string | array.
   */
  public objectToArray(obj: any): Array<any>{
    let result = Object.keys(obj).map((k) => {
      obj[k] = (obj[k] == null) ? 'nulo' : (typeof(obj[k]) == 'object' ? this.objectToArray(obj[k]) : obj[k]);
      return [k as string, obj[k]];
    });
    return result;
  }

  /**
   * 
   * @param array Um array com dois elementos na forma [string, string | number | boolean | array(2)]
   * @param i     O contador das iterações de recursividade
   * @returns     Um array(2) sem elementos do tipo array, com um indicador de endentação
   */
  public endentarArray(array: Array<any>, i: number = 0): Array<any> {
    i++;
    let result: Array<any> = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(['string','number','boolean'].includes(typeof(element[1]))) {
        result.push([element[0], element[1], i]);
      } else {
        result.push([element[0], null, i]);
        result.push(...this.endentarArray(element[1], i));
      }
    }
    return result;
  }

  /**
   * Compara dois arrays com a mesma estrutura, ou seja, [...['chave','valor']], onde as chaves são as mesmas e são string e os valores são
   * do mesmo tipo (null | string | number | boolean | array | object).
   * @param array1  Array que será comparado.
   * @param array2  Array de referência.
   * @returns       Retorna um array com as diferenças encontradas: [] ou [...['chave', 'valor no array1', 'valor no array2]].  
   */
  public diferencasEntreArrays(array1: Array<any>, array2: Array<any>): Array<any>{
    let result: Array<any> = [];
    array1.forEach((elem, index, array) => {
      let outroElem = array2.find(x => x[0] == elem[0]);
      if(Array.isArray(elem[1])) {
        if(!outroElem) { result.push([elem[0],elem[1],'não existe']);
        }else { this.diferencasEntreArrays(elem[1],outroElem[1]) }
      }else if((typeof(elem[1]) == 'string') && moment(elem[1]).isValid() && moment(outroElem[1]).isValid()){
        if(moment(elem[1]) != moment(outroElem[1])) result.push([elem[0],elem[1],outroElem[1]]);
      }else{
        if(array2.find(x => x[0] == elem[0])[1] != elem[1]) result.push([elem[0],elem[1],array2.find(x => x[0] == elem[0])[1]]);
      }
    });
    return result;
  }

/*   EXEMPLO DA FUNÇÃO DE ENDENTAÇÃO: 
  [['nome','Ricardo']] => ['nome','Ricardo', 1] 

  [
    ['Valores atuais',[
        ['nome','Novo Ricardo'],
        ['idade', 30],
        ['endereco', 'Av. Abdias Neves, 2168']
        ],
        ['idoso', true]
      ]
    ],
    ['Valores anteriores',[
        ['nome','Ricardo'],
        ['idade', 29],
        ['endereco',[
            ['av','Higino Cunha'],
            ['nr', 1835]
          ]
        ],
        ['idoso', false]
      ]
    ]
  ] => ['Valores atuais',]

  ||

['Valores atuais',null,1]
['nome','novo Ricardo',2]
['idade',30,2]
['endereco',null,2]
['av','Abdias Neves',3]
['nr','2168,3]
['idoso',true,2]
['Valores anteriores',null,1]
['nome','Ricardo',2]
['idade',29,2]
['endereco',null,2]
['av','Higino Cunha',3]
['nr','1835,3]
['idoso',false,2]

  ||

  Valores atuais
    nome: Novo Ricardo
    idade: 30
    endereco
      av: Abdias Neves
      nr: 2168
    idoso: true
  Valores anteriores
    nome: Ricardo
    idade: 29
    endereco
      av: Higino Cunha
      nr: 1835
    idoso: false
  
  
  */

/**
 *   EXEMPLO DA FUNÇÃO DE DIFERENCASENTREARRAYS
 * 
 *    array1 = [
 *      ['nome', 'Delegacia de Floriano'],
 *      ['expediente', [
 *                       ['especial', [
 *                                      [0, [['inicio', '08:00'],['fim','12:00'],['data','2022-01-11'],['sem',false]],
 *                                      [1, [['inicio', '14:00'],['fim','18:00'],['data','2022-01-11'],['sem',false]]
 *                                    ]],
 *                       ['segunda', [
 *                                      [0, [['inicio', '10:00'],['fim','12:00']],
 *                                      [1, [['inicio', '14:00'],['fim','18:00']]
 *                                   ]],
 *                       ['terca', [
 *                                      [0, [['inicio', '08:00'],['fim','12:00']],
 *                                      [1, [['inicio', '14:00'],['fim','18:00']]
 *                                 ]],
 *                     ]
 *      ]
 *    ]
 * 
 *    array2 = [
 *      ['nome', 'Delegacia de Floriano'],
 *      ['expediente', [
 *                       ['especial', [
 *                                      [0, [['inicio', '08:00'],['fim','12:00'],['data','2022-01-11'],['sem',false]],
 *                                    ]],
 *                       ['segunda', [
 *                                      [0, [['inicio', '08:00'],['fim','12:00']],
 *                                      [1, [['inicio', '14:00'],['fim','18:00']]
 *                                   ]],
 *                       ['terca', [
 *                                      [0, [['inicio', '08:00'],['fim','12:00']],
 *                                      [1, [['inicio', '14:00'],['fim','16:00']]
 *                                 ]],
 *                     ]
 *      ]
 *    ]
 * 
 *    diferenca = [
 *      ['expediente', [
 *                       ['especial', [
 *                                      [1, [['inicio', '14:00'],['fim','18:00'],['data','2022-01-11'],['sem',false]], null
 *                                    ]],
 *                       ['segunda', [
 *                                      [0, [['inicio', '10:00'],['fim','12:00']], [['inicio', '08:00'],['fim','12:00']]
 *                                   ]],
 *                       ['terca', [
 *                                      [1, [['inicio', '14:00'],['fim','18:00']], [['inicio', '14:00'],['fim','16:00']]
 *                                 ]],
 *                     ]
 *      ]
 *    ]
 */
}