declare namespace UnityEditor {
  class PackageImport extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static ShowImportPackage(packagePath: string, items: UnityEditor.ImportPackageItem[], packageIconPath: string, allowReInstall: boolean): void;
    OnGUI(): void;
    static DrawTexture(r: any, tex: any, useDropshadow: boolean): void;
    static GetPreview(previewPath: string): any;
    static HasInvalidCharInFilePath(filePath: string): boolean;
    // properties
    readonly canReInstall: boolean;
    readonly doReInstall: boolean;
    readonly packageItems: UnityEditor.ImportPackageItem[];
    // fields
  }
}
