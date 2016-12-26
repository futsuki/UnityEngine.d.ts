declare namespace UnityEditor {
  class AnimationClipEditor {
    // constructors
    constructor();
    // methods
    ShowRange(info: UnityEditor.AnimationClipInfoProperties): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    ClipRangeGUI(startFrame: any, stopFrame: any, changedStart: any, changedStop: any, showAdditivePoseFrame: boolean, additivePoseframe: any, changedAdditivePoseframe: any): void;
    OnInspectorGUI(): void;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    ReloadPreviewInstances(): void;
    DrawHeader(): void;
    DrawPreview(previewArea: any): void;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    mask: UnityEditor.Animations.AvatarMask;
    takeNames: string[];
    takeIndex: number;
    needsToGenerateClipInfo: boolean;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    static s_EventTimelineMax: number;
  }
}
