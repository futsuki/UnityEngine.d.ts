declare namespace UnityEditor {
  class AnimationWindowClipPopup {
    // constructors
    constructor();
    // methods
    OnGUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    state: UnityEditorInternal.AnimationWindowState;
  }
}
