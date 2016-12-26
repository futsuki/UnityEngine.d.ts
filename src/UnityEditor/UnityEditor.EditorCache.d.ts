declare namespace UnityEditor {
  class EditorCache {
    // constructors
    constructor();
    constructor(requirements: UnityEditor.EditorFeatures);
    // methods
    CleanupUntouchedEditors(): void;
    CleanupAllEditors(): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    get_Item(o: any): UnityEditor.EditorWrapper;
    // fields
  }
}
