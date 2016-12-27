declare namespace UnityEditor {
  class Timeline extends System.Object {
    // constructors
    constructor();
    // methods
    ResetRange(): void;
    DoTimeline(timeRect: any): boolean;
    // properties
    SrcPivotList: UnityEditor.Timeline.PivotSample[];
    DstPivotList: UnityEditor.Timeline.PivotSample[];
    srcLoop: boolean;
    dstLoop: boolean;
    Time: number;
    StartTime: number;
    StopTime: number;
    SrcName: string;
    DstName: string;
    SrcStartTime: number;
    SrcStopTime: number;
    readonly SrcDuration: number;
    DstStartTime: number;
    DstStopTime: number;
    readonly DstDuration: number;
    TransitionStartTime: number;
    TransitionStopTime: number;
    HasExitTime: boolean;
    readonly TransitionDuration: number;
    SampleStopTime: number;
    // fields
  }
}
