declare namespace UnityEngine.WSA {
  class Launcher extends System.Object {
    // constructors
    constructor();
    // methods
    static LaunchFile(folder: UnityEngine.WSA.Folder, relativeFilePath: string, showWarning: boolean): void;
    static LaunchFileWithPicker(fileExtension: string): void;
    static LaunchUri(uri: string, showWarning: boolean): void;
    // properties
    // fields
  }
}
