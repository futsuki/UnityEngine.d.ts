declare namespace UnityEditor {
  class PackageImport {
    // constructors
    constructor();
    // methods
    static ShowImportPackage(packagePath: string, items: UnityEditor.ImportPackageItem[], packageIconPath: string, allowReInstall: boolean): void;
    OnGUI(): void;
    static DrawTexture(r: any, tex: any, useDropshadow: boolean): void;
    static GetPreview(previewPath: string): any;
    static HasInvalidCharInFilePath(filePath: string): boolean;
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
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
