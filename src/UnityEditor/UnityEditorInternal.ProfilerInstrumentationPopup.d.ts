declare namespace UnityEditorInternal {
  class ProfilerInstrumentationPopup {
    // constructors
    constructor(functions: any, showAllCheckbox: boolean, showAutoInstrumemtationParams: boolean);
    // methods
    OnGUI(rect: any): any;
    OnClose(): any;
    GetWindowSize(): any;
    UpdateAllCheckbox(): any;
    static UpdateInstrumentableFunctions(): any;
    static Show(r: any): any;
    static Show(r: any, funcName: string): any;
    static FunctionHasInstrumentationPopup(funcName: string): boolean;
    OnOpen(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly InstrumentationEnabled: boolean;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
