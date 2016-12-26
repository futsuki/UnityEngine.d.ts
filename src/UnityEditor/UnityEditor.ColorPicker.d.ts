declare namespace UnityEditor {
  class ColorPicker {
    // constructors
    constructor();
    // methods
    static MakeTexture(width: number, height: number): any;
    static GetGradientTextureWithAlpha1To0(): any;
    static GetGradientTextureWithAlpha0To1(): any;
    static Show(viewToUpdate: UnityEditor.GUIView, col: any): void;
    static Show(viewToUpdate: UnityEditor.GUIView, col: any, showAlpha: boolean, hdr: boolean, hdrConfig: UnityEditor.ColorPickerHDRConfig): void;
    OnDestroy(): void;
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
    static readonly presetsEditorPrefID: string;
    static readonly defaultHDRConfig: UnityEditor.ColorPickerHDRConfig;
    static readonly visible: boolean;
    static color: any;
    static readonly get: UnityEditor.ColorPicker;
    currentPresetLibrary: string;
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
