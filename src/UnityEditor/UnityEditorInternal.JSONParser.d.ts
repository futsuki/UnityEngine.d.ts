declare namespace UnityEditorInternal {
  class JSONParser {
    // constructors
    constructor(jsondata: string);
    // methods
    static SimpleParse(jsondata: string): UnityEditorInternal.JSONValue;
    Parse(): UnityEditorInternal.JSONValue;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
