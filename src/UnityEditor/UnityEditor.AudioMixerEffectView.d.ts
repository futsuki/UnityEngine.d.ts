declare namespace UnityEditor {
  class AudioMixerEffectView extends System.Object {
    // constructors
    constructor();
    // methods
    RegisterCustomGUI(gui: UnityEditor.IAudioEffectPluginGUI): boolean;
    OnGUI(group: UnityEditor.Audio.AudioMixerGroupController): void;
    static DoInitialModule(group: UnityEditor.Audio.AudioMixerGroupController, controller: UnityEditor.Audio.AudioMixerController, allGroups: UnityEditor.Audio.AudioMixerGroupController[]): number;
    DoEffectGUI(effectIndex: number, group: UnityEditor.Audio.AudioMixerGroupController, allGroups: UnityEditor.Audio.AudioMixerGroupController[], effectMap: any, highlightEffectIndex: any): void;
    // properties
    // fields
  }
}
