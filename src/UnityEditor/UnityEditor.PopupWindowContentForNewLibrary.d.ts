declare namespace UnityEditor {
  class PopupWindowContentForNewLibrary extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(createLibraryCallback: ((arg1: string, arg2: UnityEditor.PresetFileLocation) => string));
    // methods
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    // properties
    // fields
  }
}
