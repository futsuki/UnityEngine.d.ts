declare namespace UnityEditor {
  class CubemapInspector extends UnityEditor.TextureInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    static ObjectField(label: string, obj: UnityEngine.Object, objType: any, allowSceneObjects: boolean, options: any[]): UnityEngine.Object;
    // properties
    // fields
  }
}
