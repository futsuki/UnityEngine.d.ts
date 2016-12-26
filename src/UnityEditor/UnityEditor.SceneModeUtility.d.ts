declare namespace UnityEditor {
  class SceneModeUtility {
    // constructors
    private constructor();
    // methods
    static SearchForType(type: any): void;
    static SearchBar(types: any[]): any;
    static StaticFlagField(label: string, property: UnityEditor.SerializedProperty, flag: number): boolean;
    static SetStaticFlags(targetObjects: any[], changedFlags: number, flagValue: boolean): boolean;
    static GetObjects(gameObjects: any[], includeChildren: boolean): any[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
