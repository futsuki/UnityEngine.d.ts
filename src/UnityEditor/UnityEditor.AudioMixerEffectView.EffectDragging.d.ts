declare namespace UnityEditor.AudioMixerEffectView {
  class EffectDragging extends System.Object {
    // constructors
    constructor();
    // methods
    IsDraggingIndex(effectIndex: number): boolean;
    HandleDragElement(effectIndex: number, effectRect: any, dragRect: any, group: UnityEditor.Audio.AudioMixerGroupController, allGroups: UnityEditor.Audio.AudioMixerGroupController[]): void;
    HandleDragging(totalRect: any, group: UnityEditor.Audio.AudioMixerGroupController, controller: UnityEditor.Audio.AudioMixerController): void;
    // properties
    readonly dragControlID: number;
    // fields
  }
}
