declare namespace UnityEditor {
  class AnimationClipEditor {
    // constructors
    constructor();
    // methods
    ShowRange(info: UnityEditor.AnimationClipInfoProperties): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    ClipRangeGUI(startFrame: any, stopFrame: any, changedStart: any, changedStop: any, showAdditivePoseFrame: boolean, additivePoseframe: any, changedAdditivePoseframe: any): any;
    OnInspectorGUI(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
    GetInfoString(): string;
    ReloadPreviewInstances(): any;
    DrawHeader(): any;
    DrawPreview(previewArea: any): any;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): any;
    MoveNextTarget(): boolean;
    ResetTarget(): any;
    SetDirty(): any;
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
