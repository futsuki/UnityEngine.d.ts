declare namespace UnityEditor.Web {
  class JspmError {
    // constructors
    constructor(messageID: number, status: number, errorClass: string, message: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    errorClass: string;
    message: string;
    version: number;
    messageID: number;
    status: number;
  }
}
