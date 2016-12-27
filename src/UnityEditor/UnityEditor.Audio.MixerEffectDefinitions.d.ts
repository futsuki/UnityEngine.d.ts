declare namespace UnityEditor.Audio {
  class MixerEffectDefinitions extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAudioEffectNames(): string[];
    static GetAudioEffectParameterDesc(effectName: string): UnityEditor.Audio.MixerParameterDefinition[];
    static EffectCanBeSidechainTarget(effect: UnityEditor.Audio.AudioMixerEffectController): boolean;
    static Refresh(): void;
    static EffectExists(name: string): boolean;
    static GetEffectList(): string[];
    static ClearDefinitions(): void;
    static GetEffectParameters(effect: string): UnityEditor.Audio.MixerParameterDefinition[];
    static RegisterAudioMixerEffect(name: string, definitions: UnityEditor.Audio.MixerParameterDefinition[]): boolean;
    // properties
    // fields
  }
}
