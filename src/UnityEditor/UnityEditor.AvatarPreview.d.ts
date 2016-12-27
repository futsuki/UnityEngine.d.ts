declare namespace UnityEditor {
  class AvatarPreview extends System.Object {
    // constructors
    constructor(previewObjectInScene: any, objectOnSameAsset: UnityEngine.Motion);
    // methods
    static GetAnimationType(go: any): UnityEditor.ModelImporterAnimationType;
    static GetAnimationType(motion: UnityEngine.Motion): UnityEditor.ModelImporterAnimationType;
    static IsValidPreviewGameObject(target: any, requiredClipType: UnityEditor.ModelImporterAnimationType): boolean;
    static FindBestFittingRenderableGameObjectFromModelAsset(asset: UnityEngine.Object, animationType: UnityEditor.ModelImporterAnimationType): any;
    ResetPreviewInstance(): void;
    OnDestroy(): void;
    DoSelectionChange(): void;
    DoPreviewSettings(): void;
    DoRenderPreview(previewRect: any, background: any): void;
    AvatarTimeControlGUI(rect: any): void;
    DoAvatarPreviewDrag(type: any): void;
    DoAvatarPreviewOrbit(evt: any, previewRect: any): void;
    DoAvatarPreviewPan(evt: any): void;
    DoAvatarPreviewFrame(evt: any, type: any, previewRect: any): void;
    DoAvatarPreviewZoom(evt: any, delta: number): void;
    DoAvatarPreview(rect: any, background: any): void;
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
