declare namespace UnityEditorInternal {
  class AnimationWindowKeySelection extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    SaveSelection(undoLabel: string): void;
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    // properties
    selectedKeyHashes: any;
    // fields
  }
}
