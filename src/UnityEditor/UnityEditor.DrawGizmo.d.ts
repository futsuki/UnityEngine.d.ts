declare namespace UnityEditor {
  class DrawGizmo {
    // constructors
    constructor(gizmo: UnityEditor.GizmoType);
    constructor(gizmo: UnityEditor.GizmoType, drawnGizmoType: any);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly TypeId: any;
    // fields
    drawnType: any;
    drawOptions: UnityEditor.GizmoType;
  }
}
