declare namespace UnityEditor.ConsoleWindow {
  class ConsoleFlags {
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
    static Collapse: UnityEditor.ConsoleWindow.ConsoleFlags;
    static ClearOnPlay: UnityEditor.ConsoleWindow.ConsoleFlags;
    static ErrorPause: UnityEditor.ConsoleWindow.ConsoleFlags;
    static Verbose: UnityEditor.ConsoleWindow.ConsoleFlags;
    static StopForAssert: UnityEditor.ConsoleWindow.ConsoleFlags;
    static StopForError: UnityEditor.ConsoleWindow.ConsoleFlags;
    static Autoscroll: UnityEditor.ConsoleWindow.ConsoleFlags;
    static LogLevelLog: UnityEditor.ConsoleWindow.ConsoleFlags;
    static LogLevelWarning: UnityEditor.ConsoleWindow.ConsoleFlags;
    static LogLevelError: UnityEditor.ConsoleWindow.ConsoleFlags;
  }
}
