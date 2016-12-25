declare namespace UnityEditor.Audio {
  class MixerEffectDefinitions {
    // constructors
    constructor();
    // methods
    static GetAudioEffectNames(): string[];
    static GetAudioEffectParameterDesc(effectName: string): UnityEditor.Audio.MixerParameterDefinition[];
    static EffectCanBeSidechainTarget(effect: UnityEditor.Audio.AudioMixerEffectController): boolean;
    static Refresh(): any;
    static EffectExists(name: string): boolean;
    static GetEffectList(): string[];
    static ClearDefinitions(): any;
    static GetEffectParameters(effect: string): UnityEditor.Audio.MixerParameterDefinition[];
    static RegisterAudioMixerEffect(name: string, definitions: UnityEditor.Audio.MixerParameterDefinition[]): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
