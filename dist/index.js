"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ログ出力定数
 */
exports.LOGGING_CONST = {
    /**
     * トレースメッセージ開始
     */
    TRACE_START: "[Trace log start]",
    /**
     * トレースメッセージ終了
     */
    TRACE_END: "[Trace log end]",
    /**
     * 処理中にエラーが発生しました。
     */
    TRACE_ERROR: "処理中にエラーが発生しました。",
    /**
     * APIの処理を開始します。
     */
    STR_PROCESS_START: "APIの処理を開始します。",
    /**
     * APIの処理を終了します。
     */
    STR_PROCESS_END: "APIの処理を終了します。",
    /**
     * 改行コード
     */
    TRACE_NEW_LINE: "\n",
    /**
     * スペース
     */
    SPACE: " ",
    /**
     * コロン
     */
    COLON: ":",
    /**
     * スラッシュ
     */
    STR_SLASH: "/",
    /**
     * ハイフン
     */
    STR_HYPHEN: "-"
};
/**
 * HTTPヘッダーキー
 */
exports.HTTP_HEADER_KEY = {
    /**
     * コンテンツタイプ
     */
    CONTENT_TYPE: "Content-Type",
    /**
     * Authorization
     */
    AUTHORIZATION: "Authorization"
};
/**
 * HTTPヘッダー値
 */
exports.HTTP_HEADER_VALUE = {
    /**
     * application/json
     */
    CONTENT_TYPE_APPLICATION_JSON: "application/json",
    /**
     * application/x-www-form-urlencoded
     */
    CONTENT_TYPE_X_WWW_FROM_URLENCODED: "application/x-www-form-urlencoded",
    /**
     * Bearer
     */
    BEARER: "Bearer"
};
/**
 * HTTPメソッド
 */
exports.HTTP_METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
};
/**
 * 引数がnullもしくはundefinedであることを確認します。
 */
function isNullOrUndefined(subject) {
    // null
    if (typeof subject === null || subject == null)
        return true;
    // undefined
    if (typeof subject === undefined || typeof subject === "undefined")
        return true;
    // 空文字
    if (subject == "")
        return true;
    return false;
}
exports.isNullOrUndefined = isNullOrUndefined;
/**
 * JSON(object) -> JSオブジェクトに変換できることを確認します。
 * @returns 判定結果、真偽値
 */
function isJson(subject) {
    try {
        subject = (!JSON) ? eval("(" + subject + ")") : JSON.parse(subject);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isJson = isJson;
/**
 * 標準出力文字列を生成します。出力例： [Trace log start] {key : "value"} [Trace log end]
 * @param {Object} 出力したい文字列
 * @returns {String} 標準出力用に整形された文字列
 */
function appendStdOut(object) {
    var main;
    if (isJson(object))
        main = JSON.stringify(object);
    return exports.LOGGING_CONST.TRACE_START + exports.LOGGING_CONST.TRACE_NEW_LINE + main + exports.LOGGING_CONST.TRACE_NEW_LINE + exports.LOGGING_CONST.TRACE_END;
}
exports.appendStdOut = appendStdOut;
/**
 * 文字列を解析して日付フォーマットであることを確認します。
 * @param operand 日付解析対象
 */
function isDateFormat(operand) {
    if (isNaN(Date.parse(operand)))
        return false;
    return true;
}
exports.isDateFormat = isDateFormat;
/**
 * 引数の日付からYYYY/MM/DD形式に変換します。期待する日付インスタンスでない場合nullを返します。
 * @param operand オペランド
 * @param symbol 区切りに利用する文字
 * @returns YYYY/MM/DD形式の日付文字列
 */
function formatYMDWith(operand, symbol) {
    if (isNullOrUndefined(operand))
        return null;
    var year = operand.getFullYear();
    var month = operand.getMonth() + 1;
    var date = operand.getDate();
    return year + symbol + month + symbol + date;
}
exports.formatYMDWith = formatYMDWith;
/**
 * コレクションが要素を一つ以上もつことを確認します。
 * @param t コレクションオブジェクト
 * @returns 結果、条件をみたさない場合falseを返却する
 */
function hasItems(t) {
    // nullもしくは不正な値
    if (isNullOrUndefined(t))
        return false;
    // 配列形式ではない
    if (!(t instanceof Array))
        return false;
    // サイズ0以下
    if (Object.keys(t).length <= 0)
        return false;
    return true;
}
exports.hasItems = hasItems;
