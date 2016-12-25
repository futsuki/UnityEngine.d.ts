declare namespace UnityEditor.TextureImporterInspector {
  class GUIMethod {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(guiElements: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement): any;
    BeginInvoke(guiElements: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement, callback: any, object: any): any;
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
