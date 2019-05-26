"use strict"

const utiljs = require("../../utiljs/index");

/**
 * 
 */
describe("isNullOrUndefined", function(){

    // null判定
    it("001", function(){
        expect(utiljs.isNullOrUndefined(null)).toBe(true);
    });

    // 空文字判定
    it("002", function(){
        expect(utiljs.isNullOrUndefined("")).toBe(true);
    });

    // undefined判定
    it("003", function(){
        expect(utiljs.isNullOrUndefined(undefined)).toBe(true);
    });

    // 値がある場合はfalse
    it("004", function(){
        expect(utiljs.isNullOrUndefined("utiljs")).toBe(false);
    });

    // 数値
    it("005", function(){
        expect(utiljs.isNullOrUndefined(3)).toBe(false);
    });

});

/**
 * JSON形式判定
 */
describe("isJson", function(){
    // JSON形式(オブジェクトあり)
    it("001", function(){
        var subject = '{ "text" : "asserted message" }';
        expect(utiljs.isJson(subject)).toBe(true)
    });

    // JSON形式(オブジェクトなし)
    it("002", function(){
        var subject = '{}';
        expect(utiljs.isJson(subject)).toBe(true)
    });

    // JSONではない(文字列)
    it("003", function(){
        expect(utiljs.isJson("asserted message")).toBe(false)
    });

    // JSONではない(数字)
    it("004", function(){
        expect(utiljs.isJson(12)).toBe(false)
    });

    // JSONではない(真偽値)
    it("004", function(){
        expect(utiljs.isJson(false)).toBe(false)
    });
    
});

/**
 * 日付フォーマットチェック
 */
describe("isDateFormat", function(){

    // 正常な日付形式
    it("001", function(){
        expect(utiljs.isDateFormat("2019-05-26")).toBe(true);
    });

    // 正常な形式
    it("002", function(){
        expect(utiljs.isDateFormat("2019/05/26")).toBe(true);
    });

    // 異常な形式1
    it("003", function(){
        expect(utiljs.isDateFormat("20190526")).toBe(false);
    });

    // 異常な形式2
    it("004", function(){
        expect(utiljs.isDateFormat("19-05-26")).toBe(false);
    });

    // 日付ではない
    it("005", function(){
        expect(utiljs.isDateFormat("asserted message")).toBe(false);
    });
});

/**
 * リストに要素が含まれていることを確認する
 */
describe("hasItems", function(){

    // 正常な形式
    it("001", function(){
        var subject = ["1", "2", "3"];
        expect(utiljs.hasItems(subject)).toBe(true);
    });

    // 空の配列
    it("002", function(){
        var subject = [];
        expect(utiljs.hasItems(subject)).toBe(false);
    });

    // 配列ではない
    it("003", function(){
        var subject = "asserted message";
        expect(utiljs.hasItems(subject)).toBe(false);
    });

    // null
    it("004", function(){
        var subject = null;
        expect(utiljs.hasItems(subject)).toBe(false);
    });
});