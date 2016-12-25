declare namespace UnityEditor.Utils {
  class Program {
    // constructors
    constructor(si: any);
    // methods
    Start(): any;
    GetProcessStartInfo(): any;
    LogProcessStartInfo(): any;
    GetAllOutput(): string;
    Dispose(): any;
    Kill(): any;
    GetStandardInput(): any;
    GetStandardOutput(): string[];
    GetStandardOutputAsString(): string;
    GetErrorOutput(): string[];
    GetErrorOutputAsString(): string;
    WaitForExit(): any;
    WaitForExit(milliseconds: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly HasExited: boolean;
    readonly ExitCode: number;
    readonly Id: number;
    // fields
    _process: any;
  }
}
