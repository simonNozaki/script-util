"use strict"

const scriptUtil = require("../index");

/**
 * 
 */
describe("isNullOrUndefined", function(){

    // null判定
    it("001", function(){
        expect(scriptUtil.isNullOrUndefined(null)).toBe(true);
    });

    // 空文字判定
    it("002", function(){
        expect(scriptUtil.isNullOrUndefined("")).toBe(true);
    });

    // undefined判定
    it("003", function(){
        expect(scriptUtil.isNullOrUndefined(undefined)).toBe(true);
    });

    // 値がある場合はfalse
    it("004", function(){
        expect(scriptUtil.isNullOrUndefined("scriptUtil")).toBe(false);
    });

    // 数値
    it("005", function(){
        expect(scriptUtil.isNullOrUndefined(3)).toBe(false);
    });

});

/**
 * JSON形式判定
 */
describe("isJson", function(){
    // JSON形式(オブジェクトあり)
    it("001", function(){
        var subject = '{ "text" : "asserted message" }';
        expect(scriptUtil.isJson(subject)).toBe(true)
    });

    // JSON形式(オブジェクトなし)
    it("002", function(){
        var subject = '{}';
        expect(scriptUtil.isJson(subject)).toBe(true)
    });

    // JSONではない(文字列)
    it("003", function(){
        expect(scriptUtil.isJson("asserted message")).toBe(false)
    });
    
});

/**
 * 日付フォーマットチェック
 */
describe("isDateFormat", function(){

    // 正常な日付形式
    it("001", function(){
        expect(scriptUtil.isDateFormat("2019-05-26")).toBe(true);
    });

    // 正常な形式
    it("002", function(){
        expect(scriptUtil.isDateFormat("2019/05/26")).toBe(true);
    });

    // 異常な形式1
    it("003", function(){
        expect(scriptUtil.isDateFormat("20190526")).toBe(false);
    });

    // 異常な形式2
    it("004", function(){
        expect(scriptUtil.isDateFormat("19-05-26")).toBe(false);
    });

    // 日付ではない
    it("005", function(){
        expect(scriptUtil.isDateFormat("asserted message")).toBe(false);
    });
});

/**
 * リストに要素が含まれていることを確認する
 */
describe("hasItems", function(){

    // 正常な形式
    it("001", function(){
        var subject = ["1", "2", "3"];
        expect(scriptUtil.hasItems(subject)).toBe(true);
    });

    // 空の配列
    it("002", function(){
        var subject = [];
        expect(scriptUtil.hasItems(subject)).toBe(false);
    });

    // 配列ではない
    it("003", function(){
        var subject = "asserted message";
        expect(scriptUtil.hasItems(subject)).toBe(false);
    });

    // null
    it("004", function(){
        var subject = null;
        expect(scriptUtil.hasItems(subject)).toBe(false);
    });

    // 空文字
    it("005", function(){
        var subject = "";
        expect(scriptUtil.hasItems(subject)).toBe(false);
    });
});

/**
 * Dateインスタンスからスラッシュ区切りに変換
 */
describe("formatYMDWith", function(){

    // 正常な形式
    it("001", function(){
        expect(scriptUtil.formatYMDWith(new Date(), "/")).toBe("2019/5/31");
    });

    // 正常な形式
    it("002", function(){
        expect(scriptUtil.formatYMDWith(new Date(), "-")).toBe("2019-5-31");
    });

    // null
    it("003", function(){
        expect(scriptUtil.formatYMDWith(null, "-")).toBe(null);
    });

});

/**
 * 標準出力用文字列を生成
 */
describe("appendStdOut", function(){

    // 正常系
    it("001", function(){
        console.log(scriptUtil.appendStdOut('{"text" : "asserted message"}'));
    });
});

/**
 * 
 */
describe("hasNoNull", function(){

    // 正常系
    it("001", function(){
        expect(scriptUtil.hasNoNull([1 ,2, 3])).toBe(true);
    });

    // 配列ではない
    it("002", function(){
        expect(scriptUtil.hasNoNull("[1 ,2, 3]")).toBe(false);
    });

    // 空の配列
    it("003", function(){
        expect(scriptUtil.hasNoNull([])).toBe(false);
    });

    // 配列にnullを含む
    it("004", function(){
        expect(scriptUtil.hasNoNull([1, null, null])).toBe(false);
    });

    // 配列にundefinedを含む
    it("005", function(){
        expect(scriptUtil.hasNoNull([1, undefined])).toBe(false);
    });
});