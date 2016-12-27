declare namespace UnityEditor {
  class TimeCursorManipulator extends UnityEditor.AnimationWindowManipulator {
    // constructors
    constructor(style: any);
    // methods
    OnGUI(windowRect: any, pixelTime: number): void;
    // properties
    // fields
    alignment: UnityEditor.TimeCursorManipulator.Alignment;
    headColor: any;
    lineColor: any;
    dottedLine: boolean;
    drawLine: boolean;
    drawHead: boolean;
    tooltip: string;
  }
}
