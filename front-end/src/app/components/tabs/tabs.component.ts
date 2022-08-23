import { ChangeDetectorRef, Component, ContentChildren, EventEmitter, Injector, Input, OnInit, Output, QueryList } from '@angular/core';
import { LookupItem } from 'src/app/services/lookup.service';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent, { descendants: true }) tabsRef?: QueryList<TabComponent>;
  @Input() select?: (tab: LookupItem) => void;
  @Input() items: LookupItem[] = [];
  @Input() title: string = "";
  @Input() class_span: string = "h3";
  @Input() active: any = undefined;
  @Input() display?: string;
  @Input() hidden?: string;
  @Input() right?: string;
  @Input() set cdRef(value: ChangeDetectorRef) {
    this._cdRef = value;
  }
  get cdRef(): ChangeDetectorRef {
    this._cdRef = this._cdRef || this.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    return this._cdRef;
  }

  private _cdRef?: ChangeDetectorRef;

  constructor(public injector: Injector) { }

  public get isDisplay(): boolean {
    return this.display != undefined;
  }

  public get isHidden(): boolean {
    return this.hidden != undefined;
  }

  public get isRight(): boolean {
    return this.right != undefined;
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.loadTabs();
    if(this.active == undefined && this.items.length) {
      this.active = this.items[0]!.key;
    }
  }

  public loadTabs() {
    this.tabsRef?.forEach(tab => {
      tab.tabs = this;
      this.items.push({
        key: tab.key,
        value: tab.label,
        icon: tab.icon
      });
    });
    this.cdRef.detectChanges();
  }

  public onClick(tab: LookupItem) {
    this.active = tab.key;
    this.cdRef.detectChanges();
    if(this.select) this.select(tab);
  }
}
