declare namespace UnityEditor.Web {
  class JspmSuccess {
    // constructors
    constructor(messageID: number, result: any, type: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    result: any;
    type: string;
    version: number;
    messageID: number;
    status: number;
  }
}
