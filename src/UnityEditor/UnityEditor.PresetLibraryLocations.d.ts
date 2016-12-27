declare namespace UnityEditor {
  class PresetLibraryLocations extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetAvailableFilesWithExtensionOnTheHDD(fileLocation: UnityEditor.PresetFileLocation, fileExtensionWithoutDot: string): string[];
    static GetDefaultFilePathForFileLocation(fileLocation: UnityEditor.PresetFileLocation): string;
    static GetFileLocationFromPath(path: string): UnityEditor.PresetFileLocation;
    static GetParticleCurveLibraryExtension(singleCurve: boolean, signedRange: boolean): string;
    static GetCurveLibraryExtension(normalized: boolean): string;
    // properties
    static readonly defaultLibraryLocation: string;
    static readonly defaultPresetLibraryPath: string;
    static readonly defaultLibraryName: string;
    // fields
  }
}
