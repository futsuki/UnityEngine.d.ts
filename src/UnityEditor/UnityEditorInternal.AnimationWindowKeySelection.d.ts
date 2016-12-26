declare namespace UnityEditorInternal {
  class AnimationWindowKeySelection {
    // constructors
    constructor();
    // methods
    SaveSelection(undoLabel: string): void;
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    SetDirty(): void;
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
