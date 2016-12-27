declare namespace UnityEditor {
  class DrawGizmo extends System.Attribute {
    // constructors
    constructor(gizmo: UnityEditor.GizmoType);
    constructor(gizmo: UnityEditor.GizmoType, drawnGizmoType: any);
    // methods
    // properties
    // fields
    drawnType: any;
    drawOptions: UnityEditor.GizmoType;
  }
}
