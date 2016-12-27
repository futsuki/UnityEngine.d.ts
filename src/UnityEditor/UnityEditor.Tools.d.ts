declare namespace UnityEditor {
  class Tools extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    // properties
    static current: UnityEditor.Tool;
    static viewTool: UnityEditor.ViewTool;
    static readonly handlePosition: any;
    static readonly handleRect: any;
    static readonly handleRectRotation: any;
    static pivotMode: UnityEditor.PivotMode;
    static rectBlueprintMode: boolean;
    static handleRotation: any;
    static pivotRotation: UnityEditor.PivotRotation;
    static hidden: boolean;
    static visibleLayers: number;
    static lockedLayers: number;
    // fields
  }
}
