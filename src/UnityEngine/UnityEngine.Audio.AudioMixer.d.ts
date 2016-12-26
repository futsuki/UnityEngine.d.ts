declare namespace UnityEngine.Audio {
  class AudioMixer {
    // constructors
    private constructor();
    // methods
    FindMatchingGroups(subPath: string): UnityEngine.Audio.AudioMixerGroup[];
    FindSnapshot(name: string): UnityEngine.Audio.AudioMixerSnapshot;
    TransitionToSnapshots(snapshots: UnityEngine.Audio.AudioMixerSnapshot[], weights: number[], timeToReach: number): void;
    SetFloat(name: string, value: number): boolean;
    ClearFloat(name: string): boolean;
    GetFloat(name: string, value: any): boolean;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
    updateMode: UnityEngine.Audio.AudioMixerUpdateMode;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
