declare namespace UnityEngine.Audio {
  class AudioMixerSnapshot {
    // constructors
    private constructor();
    // methods
    TransitionTo(timeToReach: number): void;
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
