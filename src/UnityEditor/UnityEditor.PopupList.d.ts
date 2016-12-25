declare namespace UnityEditor {
  class PopupList {
    // constructors
    constructor(inputData: UnityEditor.PopupList.InputData);
    constructor(inputData: UnityEditor.PopupList.InputData, initialSelectionLabel: string);
    // methods
    OnClose(): any;
    GetWindowHeight(): number;
    GetWindowWidth(): number;
    GetWindowSize(): any;
    OnGUI(windowRect: any): any;
    OnOpen(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
