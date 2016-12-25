declare namespace UnityEditor.PresetLibraryManager {
  class LibraryCache {
    // constructors
    constructor(identifier: string);
    // methods
    UnloadScriptableObjects(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly identifier: string;
    readonly loadedLibraries: any;
    readonly loadedLibraryIDs: any;
    // fields
  }
}
