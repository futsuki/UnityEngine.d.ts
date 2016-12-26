declare namespace UnityEngine.Audio {
  class AudioMixerGroup {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly audioMixer: UnityEngine.Audio.AudioMixer;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
