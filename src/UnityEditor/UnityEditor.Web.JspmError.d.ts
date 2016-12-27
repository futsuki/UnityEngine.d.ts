declare namespace UnityEditor.Web {
  class JspmError extends UnityEditor.Web.JspmResult {
    // constructors
    constructor(messageID: number, status: number, errorClass: string, message: string);
    // methods
    // properties
    // fields
    errorClass: string;
    message: string;
  }
}
