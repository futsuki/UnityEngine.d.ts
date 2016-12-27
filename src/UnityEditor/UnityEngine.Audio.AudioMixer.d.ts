declare namespace UnityEngine.Audio {
  class AudioMixer extends UnityEngine.Object {
    // constructors
    protected constructor();
    // methods
    FindMatchingGroups(subPath: string): UnityEngine.Audio.AudioMixerGroup[];
    FindSnapshot(name: string): UnityEngine.Audio.AudioMixerSnapshot;
    TransitionToSnapshots(snapshots: UnityEngine.Audio.AudioMixerSnapshot[], weights: number[], timeToReach: number): void;
    SetFloat(name: string, value: number): boolean;
    ClearFloat(name: string): boolean;
    GetFloat(name: string, value: any): boolean;
    // properties
    outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
    updateMode: any;
    // fields
  }
}
