/**
 * ログ出力定数
 */
const LOGGING_CONST = {
    /**
     * トレースメッセージ開始
     */
    TRACE_START : "[Trace log start]",

    /**
     * トレースメッセージ終了
     */
    TRACE_END : "[Trace log end]",

    /**
     * 処理中にエラーが発生しました。
     */
    TRACE_ERROR : "処理中にエラーが発生しました。",

    /**
     * APIの処理を開始します。
     */
    STR_PROCESS_START : "APIの処理を開始します。",

    /**
     * APIの処理を終了します。
     */
    STR_PROCESS_END : "APIの処理を終了します。",

    /**
     * 改行コード
     */
    TRACE_NEW_LINE : "\n",

    /**
     * スペース
     */
    SPACE : " ",

    /**
     * コロン
     */
    COLON : ":",

    /**
     * スラッシュ
     */
    STR_SLASH : "/",

    /**
     * ハイフン
     */
    STR_HYPHEN : "-"
}
module.exports.LOGGING_CONST = LOGGING_CONST;

/**
 * HTTPヘッダーキー
 */
const HTTP_HEADER_KEY = {
    /**
     * コンテンツタイプ
     */
    CONTENT_TYPE : "Content-Type",

    /**
     * Authorization
     */
    AUTHORIZATION : "Authorization"
}
module.exports.HTTP_HEADER_KEY = HTTP_HEADER_KEY;

/**
 * HTTPヘッダー値
 */
const HTTP_HEADER_VALUE = {
    /**
     * application/json
     */
    CONTENT_TYPE_APPLICATION_JSON : "application/json",

    /**
     * application/x-www-form-urlencoded
     */
    CONTENT_TYPE_X_WWW_FROM_URLENCODED : "application/x-www-form-urlencoded",

    /**
     * Bearer
     */
    BEARER : "Bearer"
}
module.exports.HTTP_HEADER_VALUE = HTTP_HEADER_VALUE;

/**
 * HTTPメソッド
 */
const HTTP_METHOD = {
    GET : "GET",
    POST : "POST",
    PUT : "PUT",
    PATCH : "PATCH",
    DELETE : "DELETE"
}
module.exports.HTTP_METHOD = HTTP_METHOD;

/**
 * 引数がnullもしくはundefinedであることを確認します。
 */
module.exports.isNullOrUndefined = function(subject){
    // null
    if(typeof subject === null || subject == null) return true;

    // undefined
    if(typeof subject === undefined || typeof subject === "undefined") return true;

    // 空文字
    if(subject == "") return true;

    return false;
}

/**
 * JSON(object) -> JSオブジェクトに変換できることを確認します。
 * @returns 判定結果、真偽値
 */
module.exports.isJson = function(subject) {

    // 引数が関数であるかチェック
    subject = (typeof subject === "function") ? subject() : subject;

    if(typeof subject !== "string") return false;

    try{
        subject = (!JSON) ? eval("(" + subject + ")") : JSON.parse(subject);
        return true;
    }catch(e){
        return false;
    }
}

/**
 * 標準出力文字列を生成します。出力例： [Trace log start] {key : "value"} [Trace log end]
 * @param {Object} 出力したい文字列
 * @returns {String} 標準出力用に整形された文字列
 */
module.exports.appendStdOut = function(object){

    var main;

    if(isJson(object)) main = JSON.stringify(object);

    if (typeof object !== String){
        main = String(object);
    } else {
        main = object;
    }

    return appConst.STD_OUT_CONST.TRACE_START + appConst.STD_OUT_CONST.TRACE_NEW_LINE + main + appConst.STD_OUT_CONST.TRACE_NEW_LINE + appConst.STD_OUT_CONST.TRACE_END;
}

/**
 * 文字列を解析して日付フォーマットであることを確認します。
 * @param operand 日付解析対象
 */
module.exports.isDateFormat = function(operand) {
    if (Number.isNaN(Date.parse(operand))) return false;

    return true;
}

/**
 * 引数の日付からYYYY/MM/DD形式に変換します。期待する日付インスタンスでない場合nullを返します。
 * @param operand オペランド
 * @param symbol 区切りに利用する文字
 * @returns YYYY/MM/DD形式の日付文字列
 */
module.exports.formatYMDWith = function(operand, symbol) {
    if(this.isNullOrUndefined(operand)) return null;

    if(!(operand instanceof Date)) return null;

    if(!this.isDateFormat(operand)) return null;

    if(symbol !== this.LOGGING_CONST.STR_SLASH || symbol !== this.LOGGING_CONST.STR_HYPHEN) return null;

    let year = operand.getFullYear();
    let month = operand.getMonth() + 1;
    let date = operand.getDate();

    return year + symbol + month + symbol + date;
}

/**
 * コレクションが要素を一つ以上もつことを確認します。
 * @param t コレクションオブジェクト
 * @returns 結果、条件をみたさない場合falseを返却する
 */
module.exports.hasItems = function(t){
    // nullもしくは不正な値
    if(this.isNullOrUndefined(t)) return false;

    // 配列形式ではない
    if(!(t instanceof Array)) return false;

    // サイズ0以下
    if(Object.keys(t).length <= 0) return false;

    return true;
}