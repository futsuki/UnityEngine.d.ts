declare namespace UnityEditor {
  class SketchUpImporter extends UnityEditor.ModelImporter {
    // constructors
    constructor();
    // methods
    GetScenes(): UnityEditor.SketchUpImportScene[];
    GetDefaultCamera(): UnityEditor.SketchUpImportCamera;
    // properties
    readonly latitude: number;
    readonly longitude: number;
    readonly northCorrection: number;
    // fields
  }
}
