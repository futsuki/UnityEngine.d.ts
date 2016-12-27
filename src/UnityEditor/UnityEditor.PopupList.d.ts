declare namespace UnityEditor {
  class PopupList extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(inputData: UnityEditor.PopupList.InputData);
    constructor(inputData: UnityEditor.PopupList.InputData, initialSelectionLabel: string);
    // methods
    OnClose(): void;
    GetWindowHeight(): number;
    GetWindowWidth(): number;
    GetWindowSize(): any;
    OnGUI(windowRect: any): void;
    // properties
    // fields
  }
}
