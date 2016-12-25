declare namespace UnityEditorInternal {
  class AnimationWindowKeySelection {
    // constructors
    constructor();
    // methods
    SaveSelection(undoLabel: string): any;
    OnBeforeSerialize(): any;
    OnAfterDeserialize(): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    selectedKeyHashes: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
