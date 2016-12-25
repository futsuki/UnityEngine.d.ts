declare namespace UnityEditor.AudioMixerEffectGUI {
  class ParameterTransitionOverrideContext {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController, parameter: UnityEditor.GUID, type: UnityEditor.Audio.ParameterTransitionType);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    controller: UnityEditor.Audio.AudioMixerController;
    parameter: UnityEditor.GUID;
    type: UnityEditor.Audio.ParameterTransitionType;
  }
}
