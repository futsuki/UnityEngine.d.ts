declare namespace UnityEditorInternal.GenerateIconsWithMipLevels {
  class InputData extends System.Object {
    // constructors
    constructor();
    // methods
    GetMipFileName(baseName: string, mipResolution: number): string;
    // properties
    // fields
    sourceFolder: string;
    targetFolder: string;
    mipIdentifier: string;
    mipFileExtension: string;
    generatedFileNames: string[];
  }
}
