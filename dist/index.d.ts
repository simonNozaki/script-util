/**
 * ログ出力定数
 */
export declare const LOGGING_CONST: {
    /**
     * トレースメッセージ開始
     */
    TRACE_START: string;
    /**
     * トレースメッセージ終了
     */
    TRACE_END: string;
    /**
     * 処理中にエラーが発生しました。
     */
    TRACE_ERROR: string;
    /**
     * APIの処理を開始します。
     */
    STR_PROCESS_START: string;
    /**
     * APIの処理を終了します。
     */
    STR_PROCESS_END: string;
    /**
     * 改行コード
     */
    TRACE_NEW_LINE: string;
    /**
     * スペース
     */
    SPACE: string;
    /**
     * コロン
     */
    COLON: string;
    /**
     * スラッシュ
     */
    STR_SLASH: string;
    /**
     * ハイフン
     */
    STR_HYPHEN: string;
};
/**
 * HTTPヘッダーキー
 */
export declare const HTTP_HEADER_KEY: {
    /**
     * コンテンツタイプ
     */
    CONTENT_TYPE: string;
    /**
     * Authorization
     */
    AUTHORIZATION: string;
};
/**
 * HTTPヘッダー値
 */
export declare const HTTP_HEADER_VALUE: {
    /**
     * application/json
     */
    CONTENT_TYPE_APPLICATION_JSON: string;
    /**
     * application/x-www-form-urlencoded
     */
    CONTENT_TYPE_X_WWW_FROM_URLENCODED: string;
    /**
     * Bearer
     */
    BEARER: string;
};
/**
 * HTTPメソッド
 */
export declare const HTTP_METHOD: {
    GET: string;
    POST: string;
    PUT: string;
    PATCH: string;
    DELETE: string;
};
/**
 * 引数がnullもしくはundefinedであることを確認します。
 */
export declare function isNullOrUndefined(subject: object | string): boolean;
/**
 * JSON(object) -> JSオブジェクトに変換できることを確認します。
 * @returns 判定結果、真偽値
 */
export declare function isJson(subject: string): boolean;
/**
 * 標準出力文字列を生成します。出力例： [Trace log start] {key : "value"} [Trace log end]
 * @param {Object} 出力したい文字列
 * @returns {String} 標準出力用に整形された文字列
 */
export declare function appendStdOut(object: string): string;
/**
 * 文字列を解析して日付フォーマットであることを確認します。
 * @param operand 日付解析対象
 */
export declare function isDateFormat(operand: string): boolean;
/**
 * 引数の日付からYYYY/MM/DD形式に変換します。期待する日付インスタンスでない場合nullを返します。
 * @param operand オペランド
 * @param symbol 区切りに利用する文字
 * @returns YYYY/MM/DD形式の日付文字列
 */
export declare function formatYMDWith(operand: Date, symbol: string): string | null;
/**
 * コレクションが要素を一つ以上もつことを確認します。
 * @param t コレクションオブジェクト
 * @returns 結果、条件をみたさない場合falseを返却する
 */
export declare function hasItems<T>(t: T[]): boolean;
