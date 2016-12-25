declare namespace UnityEditor.ConsoleWindow {
  class Mode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Error: UnityEditor.ConsoleWindow.Mode;
    static Assert: UnityEditor.ConsoleWindow.Mode;
    static Log: UnityEditor.ConsoleWindow.Mode;
    static Fatal: UnityEditor.ConsoleWindow.Mode;
    static DontPreprocessCondition: UnityEditor.ConsoleWindow.Mode;
    static AssetImportError: UnityEditor.ConsoleWindow.Mode;
    static AssetImportWarning: UnityEditor.ConsoleWindow.Mode;
    static ScriptingError: UnityEditor.ConsoleWindow.Mode;
    static ScriptingWarning: UnityEditor.ConsoleWindow.Mode;
    static ScriptingLog: UnityEditor.ConsoleWindow.Mode;
    static ScriptCompileError: UnityEditor.ConsoleWindow.Mode;
    static ScriptCompileWarning: UnityEditor.ConsoleWindow.Mode;
    static StickyError: UnityEditor.ConsoleWindow.Mode;
    static MayIgnoreLineNumber: UnityEditor.ConsoleWindow.Mode;
    static ReportBug: UnityEditor.ConsoleWindow.Mode;
    static DisplayPreviousErrorInStatusBar: UnityEditor.ConsoleWindow.Mode;
    static ScriptingException: UnityEditor.ConsoleWindow.Mode;
    static DontExtractStacktrace: UnityEditor.ConsoleWindow.Mode;
    static ShouldClearOnPlay: UnityEditor.ConsoleWindow.Mode;
    static GraphCompileError: UnityEditor.ConsoleWindow.Mode;
    static ScriptingAssertion: UnityEditor.ConsoleWindow.Mode;
  }
}
