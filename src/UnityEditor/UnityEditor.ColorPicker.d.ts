declare namespace UnityEditor {
  class ColorPicker {
    // constructors
    constructor();
    // methods
    static MakeTexture(width: number, height: number): any;
    static GetGradientTextureWithAlpha1To0(): any;
    static GetGradientTextureWithAlpha0To1(): any;
    static Show(viewToUpdate: UnityEditor.GUIView, col: any): any;
    static Show(viewToUpdate: UnityEditor.GUIView, col: any, showAlpha: boolean, hdr: boolean, hdrConfig: UnityEditor.ColorPickerHDRConfig): any;
    OnDestroy(): any;
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
