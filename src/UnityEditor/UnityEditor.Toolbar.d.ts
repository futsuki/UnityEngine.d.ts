declare namespace UnityEditor {
  class Toolbar extends UnityEditor.GUIView {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnCollabStateChanged(info: UnityEditor.Collaboration.CollabInfo): void;
    UpdateCollabToolbarState(): void;
    CalcHeight(): number;
    // properties
    // fields
    static get: UnityEditor.Toolbar;
    static requestShowCollabToolbar: boolean;
  }
}
