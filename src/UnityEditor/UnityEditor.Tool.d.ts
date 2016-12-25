declare namespace UnityEditor {
  class Tool {
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
    static View: UnityEditor.Tool;
    static Move: UnityEditor.Tool;
    static Rotate: UnityEditor.Tool;
    static Scale: UnityEditor.Tool;
    static Rect: UnityEditor.Tool;
    static None: UnityEditor.Tool;
  }
}
