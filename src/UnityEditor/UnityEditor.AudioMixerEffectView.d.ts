declare namespace UnityEditor {
  class AudioMixerEffectView {
    // constructors
    constructor();
    // methods
    RegisterCustomGUI(gui: UnityEditor.IAudioEffectPluginGUI): boolean;
    OnGUI(group: UnityEditor.Audio.AudioMixerGroupController): any;
    static DoInitialModule(group: UnityEditor.Audio.AudioMixerGroupController, controller: UnityEditor.Audio.AudioMixerController, allGroups: any): number;
    DoEffectGUI(effectIndex: number, group: UnityEditor.Audio.AudioMixerGroupController, allGroups: any, effectMap: any, highlightEffectIndex: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
