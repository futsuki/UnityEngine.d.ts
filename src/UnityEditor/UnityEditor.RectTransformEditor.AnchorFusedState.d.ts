declare namespace UnityEditor.RectTransformEditor {
  class AnchorFusedState {
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
    static None: UnityEditor.RectTransformEditor.AnchorFusedState;
    static All: UnityEditor.RectTransformEditor.AnchorFusedState;
    static Horizontal: UnityEditor.RectTransformEditor.AnchorFusedState;
    static Vertical: UnityEditor.RectTransformEditor.AnchorFusedState;
  }
}
