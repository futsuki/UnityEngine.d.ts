declare namespace UnityEditor {
  class EditorCache {
    // constructors
    constructor();
    constructor(requirements: UnityEditor.EditorFeatures);
    // methods
    CleanupUntouchedEditors(): any;
    CleanupAllEditors(): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    get_Item(o: any): UnityEditor.EditorWrapper;
    // fields
  }
}
