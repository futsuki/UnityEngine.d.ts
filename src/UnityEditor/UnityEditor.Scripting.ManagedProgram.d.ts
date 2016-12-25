declare namespace UnityEditor.Scripting {
  class ManagedProgram {
    // constructors
    constructor(monodistribution: string, profile: string, executable: string, arguments_: string, setupStartInfo: any);
    constructor(monodistribution: string, profile: string, executable: string, arguments_: string, setMonoEnvironmentVariables: boolean, setupStartInfo: any);
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
