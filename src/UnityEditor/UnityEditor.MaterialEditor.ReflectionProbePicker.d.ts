declare namespace UnityEditor.MaterialEditor {
  class ReflectionProbePicker {
    // constructors
    constructor();
    // methods
    GetWindowSize(): any;
    OnEnable(): any;
    OnDisable(): any;
    OnGUI(rc: any): any;
    OnOpen(): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Target: any;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
