declare namespace UnityEditor.Utils {
  class Program extends System.Object {
    // constructors
    constructor(si: any);
    // methods
    Start(): void;
    GetProcessStartInfo(): any;
    LogProcessStartInfo(): void;
    GetAllOutput(): string;
    Dispose(): void;
    Kill(): void;
    GetStandardInput(): any;
    GetStandardOutput(): string[];
    GetStandardOutputAsString(): string;
    GetErrorOutput(): string[];
    GetErrorOutputAsString(): string;
    WaitForExit(): void;
    WaitForExit(milliseconds: number): boolean;
    // properties
    readonly HasExited: boolean;
    readonly ExitCode: number;
    readonly Id: number;
    // fields
    _process: any;
  }
}
