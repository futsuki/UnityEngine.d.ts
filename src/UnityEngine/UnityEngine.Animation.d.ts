declare namespace UnityEngine {
  class Animation extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Stop(): void;
    Stop(name: string): void;
    Rewind(name: string): void;
    Rewind(): void;
    Sample(): void;
    IsPlaying(name: string): boolean;
    Play(): boolean;
    Play(mode: UnityEngine.PlayMode): boolean;
    Play(animation: string, mode: UnityEngine.PlayMode): boolean;
    Play(animation: string): boolean;
    Play(mode: UnityEngine.AnimationPlayMode): boolean;
    Play(animation: string, mode: UnityEngine.AnimationPlayMode): boolean;
    CrossFade(animation: string, fadeLength: number, mode: UnityEngine.PlayMode): void;
    CrossFade(animation: string, fadeLength: number): void;
    CrossFade(animation: string): void;
    Blend(animation: string, targetWeight: number, fadeLength: number): void;
    Blend(animation: string, targetWeight: number): void;
    Blend(animation: string): void;
    CrossFadeQueued(animation: string, fadeLength: number, queue: UnityEngine.QueueMode, mode: UnityEngine.PlayMode): UnityEngine.AnimationState;
    CrossFadeQueued(animation: string, fadeLength: number, queue: UnityEngine.QueueMode): UnityEngine.AnimationState;
    CrossFadeQueued(animation: string, fadeLength: number): UnityEngine.AnimationState;
    CrossFadeQueued(animation: string): UnityEngine.AnimationState;
    PlayQueued(animation: string, queue: UnityEngine.QueueMode, mode: UnityEngine.PlayMode): UnityEngine.AnimationState;
    PlayQueued(animation: string, queue: UnityEngine.QueueMode): UnityEngine.AnimationState;
    PlayQueued(animation: string): UnityEngine.AnimationState;
    AddClip(clip: UnityEngine.AnimationClip, newName: string): void;
    AddClip(clip: UnityEngine.AnimationClip, newName: string, firstFrame: number, lastFrame: number, addLoopFrame: boolean): void;
    AddClip(clip: UnityEngine.AnimationClip, newName: string, firstFrame: number, lastFrame: number): void;
    RemoveClip(clip: UnityEngine.AnimationClip): void;
    RemoveClip(clipName: string): void;
    GetClipCount(): number;
    SyncLayer(layer: number): void;
    GetEnumerator(): any;
    GetClip(name: string): UnityEngine.AnimationClip;
    // properties
    clip: UnityEngine.AnimationClip;
    playAutomatically: boolean;
    wrapMode: UnityEngine.WrapMode;
    readonly isPlaying: boolean;
    get_Item(name: string): UnityEngine.AnimationState;
    animatePhysics: boolean;
    animateOnlyIfVisible: boolean;
    cullingType: UnityEngine.AnimationCullingType;
    localBounds: UnityEngine.Bounds;
    // fields
  }
}
