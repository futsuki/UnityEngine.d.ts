declare namespace UnityEditor {
  class TimeArea extends UnityEditor.ZoomableArea {
    // constructors
    constructor(minimalGUI: boolean);
    // methods
    SetTickMarkerRanges(): void;
    DrawMajorTicks(position: any, frameRate: number): void;
    TimeRuler(position: any, frameRate: number): void;
    TimeRuler(position: any, frameRate: number, labels: boolean, useEntireHeight: boolean, alpha: number): void;
    TimeRuler(position: any, frameRate: number, labels: boolean, useEntireHeight: boolean, alpha: number, timeFormat: UnityEditor.TimeArea.TimeFormat): void;
    static DrawVerticalLine(x: number, minY: number, maxY: number, color: any): void;
    static DrawVerticalLineFast(x: number, minY: number, maxY: number, color: any): void;
    BrowseRuler(position: any, time: any, frameRate: number, pickAnywhere: boolean, thumbStyle: any): UnityEditor.TimeArea.TimeRulerDragMode;
    BrowseRuler(position: any, id: number, time: any, frameRate: number, pickAnywhere: boolean, thumbStyle: any): UnityEditor.TimeArea.TimeRulerDragMode;
    FrameToPixel(i: number, frameRate: number, rect: any): number;
    TimeField(rect: any, id: number, time: number, frameRate: number, timeFormat: UnityEditor.TimeArea.TimeFormat): number;
    ValueField(rect: any, id: number, value: number): number;
    FormatTime(time: number, frameRate: number, timeFormat: UnityEditor.TimeArea.TimeFormat): string;
    FormatValue(value: number): string;
    SnapTimeToWholeFPS(time: number, frameRate: number): number;
    // properties
    hTicks: UnityEditor.TickHandler;
    vTicks: UnityEditor.TickHandler;
    // fields
  }
}
