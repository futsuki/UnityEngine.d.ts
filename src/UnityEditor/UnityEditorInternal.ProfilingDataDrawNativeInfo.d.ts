declare namespace UnityEditorInternal {
  class ProfilingDataDrawNativeInfo {
    // constructors
    private constructor();
    // methods
    Reset(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    trySelect: number;
    frameIndex: number;
    threadIndex: number;
    timeOffset: number;
    threadRect: any;
    shownAreaRect: any;
    mousePos: any;
    profilerColors: any[];
    nativeAllocationColor: any;
    ghostAlpha: number;
    nonSelectedAlpha: number;
    guiStyle: any;
    lineHeight: number;
    textFadeOutWidth: number;
    textFadeStartWidth: number;
    out_SelectedThread: number;
    out_SelectedInstanceId: number;
    out_SelectedTime: number;
    out_SelectedDur: number;
    out_SelectedY: number;
    out_SelectedPath: string;
    out_SelectedName: string;
  }
}
