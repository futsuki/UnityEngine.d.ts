declare namespace UnityEditor {
  class SpriteEditorWindow {
    // constructors
    constructor();
    // methods
    static GetWindow(): any;
    static TextureImporterApply(so: UnityEditor.SerializedObject): any;
    RefreshPropertiesCache(): any;
    InvalidatePropertiesCache(): any;
    IsEditingDisabled(): boolean;
    Reset(): any;
    ApplySpriteAlignmentToPivot(pivot: any, rect: any, alignment: any): any;
    AddSprite(rect: any, alignment: number, pivot: any, colliderAlphaCutoff: number, colliderDetail: number): UnityEditor.SpriteRect;
    DoTextureReimport(path: string): any;
    DoAutomaticSlicing(minimumSpriteSize: number, alignment: number, pivot: any, slicingMethod: UnityEditor.SpriteEditorWindow.AutoSlicingMethod): any;
    DoGridSlicing(size: any, offset: any, padding: any, alignment: number, pivot: any): any;
    GeneratePolygonOutline(sides: number): any;
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
    readonly originalTexture: any;
    textureIsDirty: boolean;
    readonly selectedTextureChanged: boolean;
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
    static s_Instance: UnityEditor.SpriteEditorWindow;
    m_ResetOnNextRepaint: boolean;
    m_IgnoreNextPostprocessEvent: boolean;
    m_OriginalTexture: any;
    static s_OneClickDragStarted: boolean;
    m_SelectedAssetPath: string;
  }
}
