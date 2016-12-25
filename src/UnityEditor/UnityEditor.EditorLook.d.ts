declare namespace UnityEditor {
  class EditorLook {
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
    static Uninitialized: UnityEditor.EditorLook;
    static LikeControls: UnityEditor.EditorLook;
    static LikeInspector: UnityEditor.EditorLook;
  }
}
