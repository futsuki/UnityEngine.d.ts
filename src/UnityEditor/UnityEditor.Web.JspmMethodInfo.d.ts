declare namespace UnityEditor.Web {
  class JspmMethodInfo {
    // constructors
    constructor(name: string, parameters: string[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    name: string;
    parameters: string[];
  }
}
