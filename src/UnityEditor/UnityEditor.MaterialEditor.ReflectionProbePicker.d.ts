declare namespace UnityEditor.MaterialEditor {
  class ReflectionProbePicker {
    // constructors
    constructor();
    // methods
    GetWindowSize(): any;
    OnEnable(): void;
    OnDisable(): void;
    OnGUI(rc: any): void;
    OnOpen(): void;
    OnClose(): void;
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
