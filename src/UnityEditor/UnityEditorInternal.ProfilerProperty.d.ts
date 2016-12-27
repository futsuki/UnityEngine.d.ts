declare namespace UnityEditorInternal {
  class ProfilerProperty extends System.Object {
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
