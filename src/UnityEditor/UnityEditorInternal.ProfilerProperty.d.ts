declare namespace UnityEditorInternal {
  class ProfilerProperty {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Cleanup(): void;
    Next(enterChildren: boolean): boolean;
    SetRoot(frame: number, profilerSortColumn: UnityEditorInternal.ProfilerColumn, viewType: UnityEditorInternal.ProfilerViewType): void;
    InitializeDetailProperty(source: UnityEditorInternal.ProfilerProperty): void;
    GetTooltip(column: UnityEditorInternal.ProfilerColumn): string;
    GetColumn(column: UnityEditorInternal.ProfilerColumn): string;
    GetAudioProfilerGroupInfo(): UnityEditorInternal.AudioProfilerGroupInfo[];
    GetAudioProfilerDSPInfo(): UnityEditorInternal.AudioProfilerDSPInfo[];
    GetAudioProfilerClipInfo(): UnityEditorInternal.AudioProfilerClipInfo[];
    GetAudioProfilerNameByOffset(offset: number): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly HasChildren: boolean;
    onlyShowGPUSamples: boolean;
    readonly instanceIDs: number[];
    readonly depth: number;
    readonly propertyPath: string;
    readonly frameFPS: string;
    readonly frameTime: string;
    readonly frameGpuTime: string;
    readonly frameDataReady: boolean;
    // fields
  }
}
