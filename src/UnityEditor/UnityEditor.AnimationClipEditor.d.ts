declare namespace UnityEditor {
  class AnimationClipEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    ShowRange(info: UnityEditor.AnimationClipInfoProperties): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    ClipRangeGUI(startFrame: any, stopFrame: any, changedStart: any, changedStop: any, showAdditivePoseFrame: boolean, additivePoseframe: any, changedAdditivePoseframe: any): void;
    OnInspectorGUI(): void;
    // properties
    mask: UnityEditor.Animations.AvatarMask;
    takeNames: string[];
    takeIndex: number;
    needsToGenerateClipInfo: boolean;
    // fields
    static s_EventTimelineMax: number;
  }
}
