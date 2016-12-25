declare namespace UnityEditor.AudioMixerEffectGUI {
  class ExposedParamContext {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController, path: UnityEditor.Audio.AudioParameterPath);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    controller: UnityEditor.Audio.AudioMixerController;
    path: UnityEditor.Audio.AudioParameterPath;
  }
}
