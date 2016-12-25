declare namespace UnityEditor.Json.Parser {
  class TOKEN {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static NONE: UnityEditor.Json.Parser.TOKEN;
    static CURLY_OPEN: UnityEditor.Json.Parser.TOKEN;
    static CURLY_CLOSE: UnityEditor.Json.Parser.TOKEN;
    static SQUARED_OPEN: UnityEditor.Json.Parser.TOKEN;
    static SQUARED_CLOSE: UnityEditor.Json.Parser.TOKEN;
    static COLON: UnityEditor.Json.Parser.TOKEN;
    static COMMA: UnityEditor.Json.Parser.TOKEN;
    static STRING: UnityEditor.Json.Parser.TOKEN;
    static NUMBER: UnityEditor.Json.Parser.TOKEN;
    static TRUE: UnityEditor.Json.Parser.TOKEN;
    static FALSE: UnityEditor.Json.Parser.TOKEN;
    static NULL: UnityEditor.Json.Parser.TOKEN;
  }
}
