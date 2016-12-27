declare namespace UnityEditor {
  class Joint2DEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    static AnchorHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
    static ConnectedAnchorHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
    static DrawAALine(start: any, end: any): void;
    static DrawDistanceGizmo(anchor: any, connectedAnchor: any, distance: number): void;
    // properties
    // fields
  }
}
