declare namespace UnityEditor.BuildReporting {
  class BuildReport {
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
    AddAppendix(obj: any): void;
    GetAppendices(type: any): any[];
    static GetLatestReport(): UnityEditor.BuildReporting.BuildReport;
    SendChanged(): void;
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
