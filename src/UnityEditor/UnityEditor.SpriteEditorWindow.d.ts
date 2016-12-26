declare namespace UnityEditor {
  class SpriteEditorWindow {
    // constructors
    constructor();
    // methods
    static GetWindow(): void;
    static TextureImporterApply(so: UnityEditor.SerializedObject): void;
    RefreshPropertiesCache(): void;
    InvalidatePropertiesCache(): void;
    IsEditingDisabled(): boolean;
    Reset(): void;
    ApplySpriteAlignmentToPivot(pivot: any, rect: any, alignment: any): any;
    AddSprite(rect: any, alignment: number, pivot: any, colliderAlphaCutoff: number, colliderDetail: number): UnityEditor.SpriteRect;
    DoTextureReimport(path: string): void;
    DoAutomaticSlicing(minimumSpriteSize: number, alignment: number, pivot: any, slicingMethod: UnityEditor.SpriteEditorWindow.AutoSlicingMethod): void;
    DoGridSlicing(size: any, offset: any, padding: any, alignment: number, pivot: any): void;
    GeneratePolygonOutline(sides: number): void;
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
