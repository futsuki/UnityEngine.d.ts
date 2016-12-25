declare namespace UnityEditorInternal {
  class AnimEditorOverlay {
    // constructors
    constructor();
    // methods
    Initialize(): any;
    OnGUI(rect: any, contentRect: any): any;
    HandleEvents(): any;
    MousePositionToTime(evt: any): number;
    MousePositionToValue(evt: any): number;
    TimeToPixel(time: number): number;
    ValueToPixel(value: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly rect: any;
    readonly contentRect: any;
    // fields
    state: UnityEditorInternal.AnimationWindowState;
  }
}
