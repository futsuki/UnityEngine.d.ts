declare namespace UnityEditor.EditorGUILayout {
  class ToggleGroupScope {
    // constructors
    constructor(label: string, toggle: boolean);
    constructor(label: any, toggle: boolean);
    // methods
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly enabled: boolean;
    // fields
  }
}
