declare namespace UnityEditorInternal {
  class AudioProfilerGroupInfoHelper {
    // constructors
    constructor();
    // methods
    static GetColumnString(info: UnityEditorInternal.AudioProfilerGroupInfoWrapper, index: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices): string;
    static GetLastColumnIndex(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static AUDIOPROFILER_FLAGS_3D: number;
    static AUDIOPROFILER_FLAGS_ISSPATIAL: number;
    static AUDIOPROFILER_FLAGS_PAUSED: number;
    static AUDIOPROFILER_FLAGS_MUTED: number;
    static AUDIOPROFILER_FLAGS_VIRTUAL: number;
    static AUDIOPROFILER_FLAGS_ONESHOT: number;
    static AUDIOPROFILER_FLAGS_GROUP: number;
    static AUDIOPROFILER_FLAGS_STREAM: number;
    static AUDIOPROFILER_FLAGS_COMPRESSED: number;
    static AUDIOPROFILER_FLAGS_LOOPED: number;
    static AUDIOPROFILER_FLAGS_OPENMEMORY: number;
    static AUDIOPROFILER_FLAGS_OPENMEMORYPOINT: number;
    static AUDIOPROFILER_FLAGS_OPENUSER: number;
    static AUDIOPROFILER_FLAGS_NONBLOCKING: number;
  }
}
