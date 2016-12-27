declare namespace UnityEditorInternal {
  class ProfilerInstrumentationPopup extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(functions: any, showAllCheckbox: boolean, showAutoInstrumemtationParams: boolean);
    // methods
    OnGUI(rect: any): void;
    OnClose(): void;
    GetWindowSize(): any;
    UpdateAllCheckbox(): void;
    static UpdateInstrumentableFunctions(): void;
    static Show(r: any): void;
    static Show(r: any, funcName: string): void;
    static FunctionHasInstrumentationPopup(funcName: string): boolean;
    // properties
    static readonly InstrumentationEnabled: boolean;
    // fields
  }
}
