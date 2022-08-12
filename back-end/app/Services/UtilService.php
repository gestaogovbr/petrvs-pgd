<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use DateTime;

class UtilService
{

    public static function emptyEntry($arrayRef, $arrayKey) {
        return empty($arrayRef) || !is_array($arrayRef) || !array_key_exists($arrayKey, $arrayRef) || empty($arrayRef[$arrayKey]);
    }

    public static function valueOrNull($arrayRef, $arrayKey) {
        return empty($arrayRef) || !is_array($arrayRef) || !array_key_exists($arrayKey, $arrayRef) ? null : $arrayRef[$arrayKey];
    }

    public static function getDateFormatted($dataHora) {
        return Carbon::instance($dataHora)->format("d/m/Y");
    }
    
    public static function getTimeFormatted($dataHora) {
        return Carbon::instance($dataHora)->format("H:i");
    }
       
    public static function getDateTimeFormatted($dataHora, $separator = " ") {
        return UtilService::getDateFormatted($dataHora) . $separator . UtilService::getTimeFormatted($dataHora);
    }

    public static function decimalToTimer($decimal) {
        $hours = floor($decimal);
        $min = round(($decimal - $hours) * 60);
        return mktime($hours, $min, 0, 0, 0, 0);
    }

    public static function timerToDecimal($time) {
        $sec = $time % 60;
        $min = floor($time / 60);
        $hours = floor($min / 60);
        $min = $min % 60;
        return $hours + ($min / 60) + ($sec / (60*60));
    }

    public static function asTimestemp($date) {
        return gettype($date) == "integer" ? $date : ($date instanceof DateTime ? $date->getTimestamp() : (gettype($date) == "string" ? strtotime($date) : $date));
    }

    public static function between($middle, $start, $end) {
        if(empty($middle) || empty($start) || empty($end)) return false;
        $check = UtilService::asTimestemp($middle);
        return (UtilService::asTimestemp($start) <= $check) && ($check <= UtilService::asTimestemp($end));
    }

    public static function lessThanOrIqual($first, $secound) {
        if(empty($fisrt) || empty($secound)) return false;
        return UtilService::asTimestemp($first) <= UtilService::asTimestemp($secound);
    }

    public static function greaterThanOrIqual($first, $secound) {
        if(empty($fisrt) || empty($secound)) return false;
        return UtilService::asTimestemp($first) >= UtilService::asTimestemp($secound);
    }

    public static function intersect($startA, $endA, $startB, $endB) {
        if(empty($startA) || empty($endA) || empty($startB) || empty($endB)) return false;
        return UtilService::asTimestemp($startA) <= UtilService::asTimestemp($endB) && UtilService::asTimestemp($endA) >= UtilService::asTimestemp($startB);
    }

    public static function minDate(...$dates) {
        return array_reduce($dates, function ($carry, $item) {
            return !empty($item) && (empty($carry) || UtilService::asTimestemp($carry) > UtilService::asTimestemp($item)) ? $item : $carry;
        }, null);
    }

    public static function maxDate(...$dates) {
        return array_reduce($dates, function ($carry, $item) {
            return !empty($item) && (empty($carry) || UtilService::asTimestemp($carry) < UtilService::asTimestemp($item)) ? $item : $carry;
        }, null);
    }

    public static function avg($array) {
        $i = 0;
        $summ = 0;
        $arrayLen = count($array);
        while ($i < $arrayLen) {
            $summ = $summ + $array[$i];
            $i++;
        }
        return $summ / $arrayLen;
    }

    public static function removeAcentos($source) {
        $comAcentos = ["/(À|Á|Â|Ã|Ä|Å|Æ)/", "/(È|É|Ê|Ë)/", "/(Ì|Í|Î|Ï)/", "/Ð/", "/(Ò|Ó|Ô|Õ|Ö|Ø)/", "/(Ù|Ú|Û|Ü)/", "/Ŕ/", "/Þ/", "/ß/", "/(à|á|â|ã|ä|å|æ)/", "/Ç/", "/ç/", "/(è|é|ê|ë)/", "/(ì|í|î|ï)/", "/ñ/", "/Ñ/", "/(ò|ó|ô|õ|ö|ø|ð)/", "/(ù|ú|û|ü)/", "/Ý/", "/(ý|ÿ)/", "/þ/", "/ŕ/"];
        $semAcentos = ["A"                , "E"          , "I"          , "D"  , "O"              , "U"          , "R"  , "s"  , "B"  , "a"                , "C"  , "c"  , "e"          , "i"          , "n"  , "N"  , "o"                , "u"          , "Y"  , "y"      , "b"  , "r"];
        return preg_replace($comAcentos, $semAcentos, $source);
    }

}
