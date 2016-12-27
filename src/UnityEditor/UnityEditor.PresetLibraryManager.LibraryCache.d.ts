declare namespace UnityEditor.PresetLibraryManager {
  class LibraryCache extends System.Object {
    // constructors
    constructor(identifier: string);
    // methods
    UnloadScriptableObjects(): void;
    // properties
    readonly identifier: string;
    readonly loadedLibraries: UnityEngine.ScriptableObject[];
    readonly loadedLibraryIDs: string[];
    // fields
  }
}
