declare namespace UnityEditor.Web {
  class JspmStubInfo {
    // constructors
    constructor(properties: UnityEditor.Web.JspmPropertyInfo[], methods: UnityEditor.Web.JspmMethodInfo[], events: string[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    properties: UnityEditor.Web.JspmPropertyInfo[];
    methods: UnityEditor.Web.JspmMethodInfo[];
    events: string[];
  }
}
