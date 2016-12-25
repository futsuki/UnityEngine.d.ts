declare namespace UnityEditor.CollisionModuleUI {
  class PlaneVizType {
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
    static Grid: UnityEditor.CollisionModuleUI.PlaneVizType;
    static Solid: UnityEditor.CollisionModuleUI.PlaneVizType;
  }
}
