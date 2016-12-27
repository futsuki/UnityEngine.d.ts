declare namespace UnityEditor {
  class MonoProcessUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static ProcessToString(process: any): string;
    static RunMonoProcess(process: any, name: string, resultingFile: string): void;
    static GetMonoExec(buildTarget: UnityEditor.BuildTarget): string;
    static GetMonoPath(buildTarget: UnityEditor.BuildTarget): string;
    static PrepareMonoProcess(target: UnityEditor.BuildTarget, workDir: string): any;
    // properties
    // fields
  }
}
