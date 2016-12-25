declare namespace UnityEditor.Audio {
  class MixerEffectDefinition {
    // constructors
    constructor(name: string, parameters: UnityEditor.Audio.MixerParameterDefinition[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    readonly parameters: UnityEditor.Audio.MixerParameterDefinition[];
    // fields
  }
}
