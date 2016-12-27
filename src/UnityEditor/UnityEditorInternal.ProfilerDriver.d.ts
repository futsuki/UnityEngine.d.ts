declare namespace UnityEditorInternal {
  class ProfilerDriver extends System.Object {
    // constructors
    constructor();
    // methods
    static BeginFrame(): void;
    static EndFrame(): void;
    static ResetHistory(): void;
    static GetNextFrameIndex(frame: number): number;
    static GetPreviousFrameIndex(frame: number): number;
    static GetFormattedStatisticsValue(frame: number, identifier: number): string;
    static GetStatisticsValues(identifier: number, firstFrame: number, scale: number, buffer: number[], maxValue: any): void;
    static ClearAllFrames(): void;
    static GetAllStatisticsProperties(): string[];
    static GetGraphStatisticsPropertiesForArea(area: UnityEditorInternal.ProfilerArea): string[];
    static GetStatisticsIdentifier(propertyName: string): number;
    static GetAvailableProfilers(): number[];
    static GetConnectionIdentifier(guid: number): string;
    static IsIdentifierConnectable(guid: number): boolean;
    static DirectIPConnect(IP: string): void;
    static DirectURLConnect(url: string): void;
    static GetOverviewText(profilerArea: UnityEditorInternal.ProfilerArea, frame: number): string;
    static RequestMemorySnapshot(): void;
    static RequestObjectMemoryInfo(gatherObjectReferences: boolean): void;
    static QueryInstrumentableFunctions(): void;
    static QueryFunctionCallees(fullName: string): void;
    static SetAutoInstrumentedAssemblies(value: UnityEditorInternal.InstrumentedAssemblyTypes): void;
    static SetAudioCaptureFlags(flags: number): void;
    static BeginInstrumentFunction(fullName: string): void;
    static EndInstrumentFunction(fullName: string): void;
    // properties
    static readonly firstFrameIndex: number;
    static readonly lastFrameIndex: number;
    static readonly maxHistoryLength: number;
    static selectedPropertyPath: string;
    static profileGPU: boolean;
    static profileEditor: boolean;
    static deepProfiling: boolean;
    static memoryRecordMode: UnityEditorInternal.ProfilerMemoryRecordMode;
    static readonly directConnectionUrl: string;
    static connectedProfiler: number;
    static readonly miniMemoryOverview: string;
    static readonly usedHeapSize: number;
    static readonly objectCount: number;
    static readonly isGPUProfilerBuggyOnDriver: boolean;
    static readonly isGPUProfilerSupportedByOS: boolean;
    static readonly isGPUProfilerSupported: boolean;
    // fields
    static directConnectionPort: string;
  }
}
