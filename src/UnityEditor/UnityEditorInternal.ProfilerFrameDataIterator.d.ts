declare namespace UnityEditorInternal {
  class ProfilerFrameDataIterator extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Next(enterChildren: boolean): boolean;
    GetThreadCount(frame: number): number;
    GetFrameStartS(frame: number): number;
    GetGroupCount(frame: number): number;
    GetGroupName(): string;
    GetThreadName(): string;
    SetRoot(frame: number, threadIdx: number): void;
    // properties
    readonly group: number;
    readonly depth: number;
    readonly path: string;
    readonly name: string;
    readonly sampleId: number;
    readonly instanceId: number;
    readonly frameTimeMS: number;
    readonly startTimeMS: number;
    readonly durationMS: number;
    readonly id: number;
    // fields
  }
}
