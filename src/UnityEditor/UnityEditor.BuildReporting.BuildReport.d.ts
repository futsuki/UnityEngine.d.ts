declare namespace UnityEditor.BuildReporting {
  class BuildReport {
    // constructors
    constructor();
    // methods
    RelocateFiles(originalPathPrefix: string, newPathPrefix: string): any;
    AddFile(path: string, role: string): any;
    AddFilesRecursive(rootDir: string, role: string): any;
    DeleteFile(path: string): any;
    DeleteFilesRecursive(rootDir: string): any;
    SummarizeErrors(): string;
    AddMessage(messageType: any, message: string): any;
    BeginBuildStepNoTiming(stepName: string): any;
    BeginBuildStep(stepName: string): any;
    AddAppendix(obj: any): any;
    GetAppendices(type: any): any[];
    static GetLatestReport(): UnityEditor.BuildReporting.BuildReport;
    SendChanged(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly crc: number;
    readonly totalTimeMS: number;
    readonly totalSize: number;
    readonly buildTarget: UnityEditor.BuildTarget;
    readonly buildOptions: UnityEditor.BuildOptions;
    readonly outputPath: string;
    readonly succeeded: boolean;
    readonly totalErrors: number;
    readonly totalWarnings: number;
    name: string;
    hideFlags: any;
    // fields
  }
}
