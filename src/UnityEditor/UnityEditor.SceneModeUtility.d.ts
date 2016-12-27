declare namespace UnityEditor {
  class SceneModeUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static SearchForType(type: any): void;
    static SearchBar(types: any[]): any;
    static StaticFlagField(label: string, property: UnityEditor.SerializedProperty, flag: number): boolean;
    static SetStaticFlags(targetObjects: UnityEngine.Object[], changedFlags: number, flagValue: boolean): boolean;
    static GetObjects(gameObjects: UnityEngine.Object[], includeChildren: boolean): any[];
    // properties
    // fields
  }
}
