declare namespace UnityEditor.Web {
  class JspmResult {
    // constructors
    constructor();
    constructor(messageID: number, status: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    version: number;
    messageID: number;
    status: number;
  }
}
