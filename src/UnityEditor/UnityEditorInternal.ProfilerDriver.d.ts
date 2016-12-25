declare namespace UnityEditorInternal {
  class ProfilerDriver {
    // constructors
    constructor();
    // methods
    static BeginFrame(): any;
    static EndFrame(): any;
    static ResetHistory(): any;
    static GetNextFrameIndex(frame: number): number;
    static GetPreviousFrameIndex(frame: number): number;
    static GetFormattedStatisticsValue(frame: number, identifier: number): string;
    static GetStatisticsValues(identifier: number, firstFrame: number, scale: number, buffer: number[], maxValue: any): any;
    static ClearAllFrames(): any;
    static GetAllStatisticsProperties(): string[];
    static GetGraphStatisticsPropertiesForArea(area: UnityEditorInternal.ProfilerArea): string[];
    static GetStatisticsIdentifier(propertyName: string): number;
    static GetAvailableProfilers(): number[];
    static GetConnectionIdentifier(guid: number): string;
    static IsIdentifierConnectable(guid: number): boolean;
    static DirectIPConnect(IP: string): any;
    static DirectURLConnect(url: string): any;
    static GetOverviewText(profilerArea: UnityEditorInternal.ProfilerArea, frame: number): string;
    static RequestMemorySnapshot(): any;
    static RequestObjectMemoryInfo(gatherObjectReferences: boolean): any;
    static QueryInstrumentableFunctions(): any;
    static QueryFunctionCallees(fullName: string): any;
    static SetAutoInstrumentedAssemblies(value: UnityEditorInternal.InstrumentedAssemblyTypes): any;
    static SetAudioCaptureFlags(flags: number): any;
    static BeginInstrumentFunction(fullName: string): any;
    static EndInstrumentFunction(fullName: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
