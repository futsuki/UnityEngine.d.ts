declare namespace UnityEditor.AudioMixerEffectView {
  class EffectDragging {
    // constructors
    constructor();
    // methods
    IsDraggingIndex(effectIndex: number): boolean;
    HandleDragElement(effectIndex: number, effectRect: any, dragRect: any, group: UnityEditor.Audio.AudioMixerGroupController, allGroups: any): any;
    HandleDragging(totalRect: any, group: UnityEditor.Audio.AudioMixerGroupController, controller: UnityEditor.Audio.AudioMixerController): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly dragControlID: number;
    // fields
  }
}
