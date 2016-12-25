declare namespace UnityEditor.SceneHierarchySortingWindow {
  class OnSelectCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(element: UnityEditor.SceneHierarchySortingWindow.InputData): any;
    BeginInvoke(element: UnityEditor.SceneHierarchySortingWindow.InputData, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
