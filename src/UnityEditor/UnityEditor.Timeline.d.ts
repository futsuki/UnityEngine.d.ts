declare namespace UnityEditor {
  class Timeline {
    // constructors
    constructor();
    // methods
    ResetRange(): any;
    DoTimeline(timeRect: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    SrcPivotList: any;
    DstPivotList: any;
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
