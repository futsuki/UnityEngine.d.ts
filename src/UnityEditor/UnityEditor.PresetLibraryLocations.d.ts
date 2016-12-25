declare namespace UnityEditor {
  class PresetLibraryLocations {
    // constructors
    private constructor();
    // methods
    static GetAvailableFilesWithExtensionOnTheHDD(fileLocation: UnityEditor.PresetFileLocation, fileExtensionWithoutDot: string): any;
    static GetDefaultFilePathForFileLocation(fileLocation: UnityEditor.PresetFileLocation): string;
    static GetFileLocationFromPath(path: string): UnityEditor.PresetFileLocation;
    static GetParticleCurveLibraryExtension(singleCurve: boolean, signedRange: boolean): string;
    static GetCurveLibraryExtension(normalized: boolean): string;
    // properties
    // fields
  }
}
