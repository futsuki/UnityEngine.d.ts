declare namespace UnityEditor {
  class EditorSelectedRenderState {
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
    static Hidden: UnityEditor.EditorSelectedRenderState;
    static Wireframe: UnityEditor.EditorSelectedRenderState;
    static Highlight: UnityEditor.EditorSelectedRenderState;
  }
}
