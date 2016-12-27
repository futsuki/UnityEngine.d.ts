declare namespace UnityEditor {
  class SpriteEditorWindow extends UnityEditor.SpriteUtilityWindow {
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
    // properties
    readonly originalTexture: any;
    textureIsDirty: boolean;
    readonly selectedTextureChanged: boolean;
    // fields
    static s_Instance: UnityEditor.SpriteEditorWindow;
    m_ResetOnNextRepaint: boolean;
    m_IgnoreNextPostprocessEvent: boolean;
    m_OriginalTexture: any;
    static s_OneClickDragStarted: boolean;
    m_SelectedAssetPath: string;
  }
}
