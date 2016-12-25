declare namespace UnityEditor.Web {
  class JspmStubInfoSuccess {
    // constructors
    constructor(messageID: number, reference: string, properties: UnityEditor.Web.JspmPropertyInfo[], methods: UnityEditor.Web.JspmMethodInfo[], events: string[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    reference: string;
    result: any;
    type: string;
    version: number;
    messageID: number;
    status: number;
  }
}
