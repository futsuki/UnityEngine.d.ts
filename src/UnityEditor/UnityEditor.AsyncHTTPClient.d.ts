declare namespace UnityEditor {
  class AsyncHTTPClient extends System.Object {
    // constructors
    constructor(_toUrl: string);
    constructor(_toUrl: string, _method: string);
    // methods
    static AbortByTag(tag: string): void;
    static CurlRequestCheck(): void;
    Abort(): void;
    IsAborted(): boolean;
    IsDone(): boolean;
    static IsDone(state: UnityEditor.AsyncHTTPClient.State): boolean;
    IsSuccess(): boolean;
    static IsSuccess(state: UnityEditor.AsyncHTTPClient.State): boolean;
    Begin(): void;
    // properties
    readonly url: string;
    readonly text: string;
    readonly bytes: number[];
    readonly texture: any;
    readonly state: UnityEditor.AsyncHTTPClient.State;
    readonly responseCode: number;
    tag: string;
    // fields
    statusCallback: ((status: UnityEditor.AsyncHTTPClient.State, bytesDone: number, bytesTotal: number) => void);
    doneCallback: ((client: UnityEditor.AsyncHTTPClient) => void);
    header: any;
  }
}
