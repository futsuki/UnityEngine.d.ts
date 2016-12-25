declare namespace UnityEngine.WSA {
  class Launcher {
    // constructors
    constructor();
    // methods
    static LaunchFile(folder: UnityEngine.WSA.Folder, relativeFilePath: string, showWarning: boolean): any;
    static LaunchFileWithPicker(fileExtension: string): any;
    static LaunchUri(uri: string, showWarning: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
