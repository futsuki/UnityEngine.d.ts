declare namespace UnityEngine.GUILayoutOption {
  class Type {
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
    static fixedWidth: UnityEngine.GUILayoutOption.Type;
    static fixedHeight: UnityEngine.GUILayoutOption.Type;
    static minWidth: UnityEngine.GUILayoutOption.Type;
    static maxWidth: UnityEngine.GUILayoutOption.Type;
    static minHeight: UnityEngine.GUILayoutOption.Type;
    static maxHeight: UnityEngine.GUILayoutOption.Type;
    static stretchWidth: UnityEngine.GUILayoutOption.Type;
    static stretchHeight: UnityEngine.GUILayoutOption.Type;
    static alignStart: UnityEngine.GUILayoutOption.Type;
    static alignMiddle: UnityEngine.GUILayoutOption.Type;
    static alignEnd: UnityEngine.GUILayoutOption.Type;
    static alignJustify: UnityEngine.GUILayoutOption.Type;
    static equalSize: UnityEngine.GUILayoutOption.Type;
    static spacing: UnityEngine.GUILayoutOption.Type;
  }
}
