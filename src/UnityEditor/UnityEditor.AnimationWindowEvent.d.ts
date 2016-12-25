declare namespace UnityEditor {
  class AnimationWindowEvent {
    // constructors
    constructor();
    // methods
    static CreateAndEdit(root: any, clip: any, time: number): UnityEditor.AnimationWindowEvent;
    static Edit(root: any, clip: any, eventIndex: number): UnityEditor.AnimationWindowEvent;
    static Edit(clipInfo: UnityEditor.AnimationClipInfoProperties, eventIndex: number): UnityEditor.AnimationWindowEvent;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    root: any;
    clip: any;
    clipInfo: UnityEditor.AnimationClipInfoProperties;
    eventIndex: number;
  }
}
