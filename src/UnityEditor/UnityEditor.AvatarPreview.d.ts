declare namespace UnityEditor {
  class AvatarPreview {
    // constructors
    constructor(previewObjectInScene: any, objectOnSameAsset: any);
    // methods
    static GetAnimationType(go: any): UnityEditor.ModelImporterAnimationType;
    static GetAnimationType(motion: any): UnityEditor.ModelImporterAnimationType;
    static IsValidPreviewGameObject(target: any, requiredClipType: UnityEditor.ModelImporterAnimationType): boolean;
    static FindBestFittingRenderableGameObjectFromModelAsset(asset: any, animationType: UnityEditor.ModelImporterAnimationType): any;
    ResetPreviewInstance(): any;
    OnDestroy(): any;
    DoSelectionChange(): any;
    DoPreviewSettings(): any;
    DoRenderPreview(previewRect: any, background: any): any;
    AvatarTimeControlGUI(rect: any): any;
    DoAvatarPreviewDrag(type: any): any;
    DoAvatarPreviewOrbit(evt: any, previewRect: any): any;
    DoAvatarPreviewPan(evt: any): any;
    DoAvatarPreviewFrame(evt: any, type: any, previewRect: any): any;
    DoAvatarPreviewZoom(evt: any, delta: number): any;
    DoAvatarPreview(rect: any, background: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly IKOnFeet: boolean;
    ShowIKOnFeetButton: boolean;
    readonly Animator: any;
    readonly PreviewObject: any;
    readonly animationClipType: UnityEditor.ModelImporterAnimationType;
    readonly bodyPosition: any;
    // fields
    timeControl: UnityEditor.TimeControl;
    fps: number;
  }
}
