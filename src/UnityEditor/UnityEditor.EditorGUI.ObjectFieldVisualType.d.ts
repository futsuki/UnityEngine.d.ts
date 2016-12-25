declare namespace UnityEditor.EditorGUI {
  class ObjectFieldVisualType {
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
    static IconAndText: UnityEditor.EditorGUI.ObjectFieldVisualType;
    static LargePreview: UnityEditor.EditorGUI.ObjectFieldVisualType;
    static MiniPreivew: UnityEditor.EditorGUI.ObjectFieldVisualType;
  }
}
