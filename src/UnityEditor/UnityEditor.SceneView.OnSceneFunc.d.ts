declare namespace UnityEditor.SceneView {
  class OnSceneFunc {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(sceneView: UnityEditor.SceneView): void;
    BeginInvoke(sceneView: UnityEditor.SceneView, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
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
