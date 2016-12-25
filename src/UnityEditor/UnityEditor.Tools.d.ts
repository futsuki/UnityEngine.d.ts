declare namespace UnityEditor {
  class Tools {
    // constructors
    constructor();
    // methods
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    name: string;
    hideFlags: any;
    // fields
  }
}
