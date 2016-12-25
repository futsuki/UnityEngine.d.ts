declare namespace UnityEditor.ShapeEditor {
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
    static Edit: UnityEditor.ShapeEditor.Tool;
    static Create: UnityEditor.ShapeEditor.Tool;
    static Break: UnityEditor.ShapeEditor.Tool;
  }
}
