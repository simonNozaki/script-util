// import * as request from "request";
import request, { RequestCallback } from "request";
import * as scriptUtil from "./index";

/**
 * REST API client.
 */
export class RestApiClient {

    /**
     * Target URI
     */
    private static url: string;

    /**
     * HTTP method
     */
    private static method: string;

    /**
     * HTTP body
     */
    private static body: object;

    /**
     * HTTP request options
     */
    private static options: object;

    /**
     * HTTP header.
     */
    private static headers: object;

    /**
     * Callback function.
     * <pre><code>
     * type RequestCallback = (error: any, response: Response, body: any) => void;
     * </pre></code>
     */
    private static callback: RequestCallback;

    // constructer, not visible
    private constructor(url: string, method: string, body: object, headers: object, callback: Function){
        url = url;
        method = method;
        body = body;
        headers = headers;
        callback = callback;
    }

    /**
     * Set URL
     * intermediate function.
     * @param url Target URIs 
     * @returns 
     */
    public static setUrl(url: string): RestApiClient{
        return new RestApiClient(url, this.method, this.body, this.options, this.callback);
    }

    /**
     * Set HTTP method.
     * intermediate function.
     * @param method request method.
     * @returns RestApiClient
     */
    public static setMethod(method: string): RestApiClient{
        return new RestApiClient(this.url, method, this.body, this.options, this.callback);
    }

    /**
     * Set HTTP body.
     * intermediate function.
     * @param body HTTP request body.
     * @returns RestApiClient
     */
    public static setBody(body: object): RestApiClient{
        return new RestApiClient(this.url, this.method, body, this.options, this.callback);
    }

    /**
     * Set HTTP header.
     * intermediate function.
     * @param method request header.
     * @returns RestApiClient
     */
    public static setHeaders(headers: object): RestApiClient{
        return new RestApiClient(this.url, this.method, this.body, headers, this.callback);
    }

    /**
     * Set callback funnction.
     * intermediate function.
     * @param method callback function.
     * @returns RestApiClient
     */
    public static setCallback(callback: Function): RestApiClient{
        return new RestApiClient(this.url, this.method, this.body, this.headers, callback);
    }

    /**
     * Build options with parameters passed by other instnace methods.
     * @returns RestApiClient
     */
    public static buildOptions(): RestApiClient{
        this.options = {
            url: this.url,
            headers : this.headers,
            method : this.method,
            body : this.body
        }

        return new RestApiClient(this.url, this.method, this.body, this.headers, this.callback);
    }

    /**
     * Make a HTTP request.
     */
    public static invoke(): request.Request {
        switch(this.method) {
            case scriptUtil.HTTP_METHOD.GET:
                return request.get(this.url, this.options, this.callback);
            case scriptUtil.HTTP_METHOD.PUT:
                return request.get(this.url, this.options, this.callback);
            case scriptUtil.HTTP_METHOD.POST:
                return request.get(this.url, this.options, this.callback);
            case scriptUtil.HTTP_METHOD.DELETE:
                return request.get(this.url, this.options, this.callback);
            default:
                throw new Error("HTTP method is not valid.");
        }
    }
}


