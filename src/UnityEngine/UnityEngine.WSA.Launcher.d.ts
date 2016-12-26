declare namespace UnityEngine.WSA {
  class Launcher {
    // constructors
    constructor();
    // methods
    static LaunchFile(folder: UnityEngine.WSA.Folder, relativeFilePath: string, showWarning: boolean): void;
    static LaunchFileWithPicker(fileExtension: string): void;
    static LaunchUri(uri: string, showWarning: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
