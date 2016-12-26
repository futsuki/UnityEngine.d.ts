declare namespace UnityEditor {
  class ClothInspectorState {
    // constructors
    constructor();
    // methods
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    DrawMode: UnityEditor.ClothInspector.DrawMode;
    ManipulateBackfaces: boolean;
    PaintMaxDistanceEnabled: boolean;
    PaintCollisionSphereDistanceEnabled: boolean;
    PaintMaxDistance: number;
    PaintCollisionSphereDistance: number;
    ToolMode: UnityEditor.ClothInspector.ToolMode;
  }
}
