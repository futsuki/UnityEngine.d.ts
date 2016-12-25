declare namespace UnityEditor {
  class MonoProcessUtility {
    // constructors
    constructor();
    // methods
    static ProcessToString(process: any): string;
    static RunMonoProcess(process: any, name: string, resultingFile: string): any;
    static GetMonoExec(buildTarget: UnityEditor.BuildTarget): string;
    static GetMonoPath(buildTarget: UnityEditor.BuildTarget): string;
    static PrepareMonoProcess(target: UnityEditor.BuildTarget, workDir: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
