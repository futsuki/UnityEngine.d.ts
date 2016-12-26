declare namespace UnityEditorInternal {
  class ProfilerInstrumentationPopup {
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
    OnOpen(): void;
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
