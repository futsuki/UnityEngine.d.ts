declare namespace UnityEditorInternal.GenerateIconsWithMipLevels {
  class InputData {
    // constructors
    constructor();
    // methods
    GetMipFileName(baseName: string, mipResolution: number): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    sourceFolder: string;
    targetFolder: string;
    mipIdentifier: string;
    mipFileExtension: string;
    generatedFileNames: any;
  }
}
