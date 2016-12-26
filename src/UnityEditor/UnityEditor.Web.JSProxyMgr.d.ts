declare namespace UnityEditor.Web {
  class JSProxyMgr {
    // constructors
    private constructor();
    // methods
    static GetInstance(): UnityEditor.Web.JSProxyMgr;
    static DoTasks(): void;
    AddGlobalObject(referenceName: string, obj: any): void;
    RemoveGlobalObject(referenceName: string): void;
    DoMessage(jsonRequest: string, callback: UnityEditor.Web.JSProxyMgr.ExecCallback, webView: UnityEditor.WebView): boolean;
    static FormatError(messageID: number, status: number, errorClass: string, message: string): UnityEditor.Web.JspmError;
    static FormatSuccess(messageID: number, result: any): UnityEditor.Web.JspmSuccess;
    GetDestinationObject(reference: string): any;
    ParseParams(method: any, data: any): any[];
    Stringify(target: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static kProtocolVersion: number;
    static kInvalidMessageID: number;
    static kErrNone: number;
    static kErrInvalidMessageFormat: number;
    static kErrUnknownObject: number;
    static kErrUnknownMethod: number;
    static kErrInvocationFailed: number;
    static kErrUnsupportedProtocol: number;
    static kErrUnknownEvent: number;
    static kTypeInvoke: string;
    static kTypeGetStubInfo: string;
    static kTypeOnEvent: string;
  }
}
