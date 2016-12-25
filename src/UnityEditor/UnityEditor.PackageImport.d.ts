declare namespace UnityEditor {
  class PackageImport {
    // constructors
    constructor();
    // methods
    static ShowImportPackage(packagePath: string, items: UnityEditor.ImportPackageItem[], packageIconPath: string, allowReInstall: boolean): any;
    OnGUI(): any;
    static DrawTexture(r: any, tex: any, useDropshadow: boolean): any;
    static GetPreview(previewPath: string): any;
    static HasInvalidCharInFilePath(filePath: string): boolean;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly canReInstall: boolean;
    readonly doReInstall: boolean;
    readonly packageItems: UnityEditor.ImportPackageItem[];
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
