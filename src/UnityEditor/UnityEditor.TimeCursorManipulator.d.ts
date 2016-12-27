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
    onStartDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    onDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    onEndDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    rect: any;
    controlID: number;
  }
}
