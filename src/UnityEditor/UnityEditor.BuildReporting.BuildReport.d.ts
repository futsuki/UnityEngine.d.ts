declare namespace UnityEditor.BuildReporting {
  class BuildReport extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    RelocateFiles(originalPathPrefix: string, newPathPrefix: string): void;
    AddFile(path: string, role: string): void;
    AddFilesRecursive(rootDir: string, role: string): void;
    DeleteFile(path: string): void;
    DeleteFilesRecursive(rootDir: string): void;
    SummarizeErrors(): string;
    AddMessage(messageType: any, message: string): void;
    BeginBuildStepNoTiming(stepName: string): void;
    BeginBuildStep(stepName: string): void;
    AddAppendix(obj: UnityEngine.Object): void;
    GetAppendices(type: any): UnityEngine.Object[];
    static GetLatestReport(): UnityEditor.BuildReporting.BuildReport;
    SendChanged(): void;
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
    // fields
  }
}
