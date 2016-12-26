declare namespace UnityEditor.Web {
  class JSProxyMgr {
    // constructors
    private constructor();
    // methods
    static GetInstance(): UnityEditor.Web.JSProxyMgr;
    static DoTasks(): void;
    static FormatError(messageID: number, status: number, errorClass: string, message: string): UnityEditor.Web.JspmError;
    static FormatSuccess(messageID: number, result: any): UnityEditor.Web.JspmSuccess;
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
