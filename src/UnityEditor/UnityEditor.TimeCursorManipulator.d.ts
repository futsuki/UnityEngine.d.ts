declare namespace UnityEditor {
  class TimeCursorManipulator {
    // constructors
    constructor(style: any);
    // methods
    OnGUI(windowRect: any, pixelTime: number): void;
    HandleEvents(): void;
    IgnoreEvents(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    alignment: UnityEditor.TimeCursorManipulator.Alignment;
    headColor: any;
    lineColor: any;
    dottedLine: boolean;
    drawLine: boolean;
    drawHead: boolean;
    tooltip: string;
    onStartDrag: UnityEditor.AnimationWindowManipulator.OnStartDragDelegate;
    onDrag: UnityEditor.AnimationWindowManipulator.OnDragDelegate;
    onEndDrag: UnityEditor.AnimationWindowManipulator.OnEndDragDelegate;
    rect: any;
    controlID: number;
  }
}
