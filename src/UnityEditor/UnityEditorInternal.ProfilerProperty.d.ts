declare namespace UnityEditorInternal {
  class ProfilerProperty {
    // constructors
    constructor();
    // methods
    Dispose(): any;
    Cleanup(): any;
    Next(enterChildren: boolean): boolean;
    SetRoot(frame: number, profilerSortColumn: UnityEditorInternal.ProfilerColumn, viewType: UnityEditorInternal.ProfilerViewType): any;
    InitializeDetailProperty(source: UnityEditorInternal.ProfilerProperty): any;
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
