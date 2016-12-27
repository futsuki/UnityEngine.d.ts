declare namespace UnityEditorInternal {
  class AnimEditorOverlay extends System.Object {
    // constructors
    constructor();
    // methods
    Initialize(): void;
    OnGUI(rect: any, contentRect: any): void;
    HandleEvents(): void;
    MousePositionToTime(evt: any): number;
    MousePositionToValue(evt: any): number;
    TimeToPixel(time: number): number;
    ValueToPixel(value: number): number;
    // properties
    readonly rect: any;
    readonly contentRect: any;
    // fields
    state: UnityEditorInternal.AnimationWindowState;
  }
}
