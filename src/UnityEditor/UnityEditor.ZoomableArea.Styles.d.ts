declare namespace UnityEditor.ZoomableArea {
  class Styles {
    // constructors
    constructor(minimalGUI: boolean);
    // methods
    InitGUIStyles(minimalGUI: boolean, enableSliderZoom: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    horizontalScrollbar: any;
    horizontalMinMaxScrollbarThumb: any;
    horizontalScrollbarLeftButton: any;
    horizontalScrollbarRightButton: any;
    verticalScrollbar: any;
    verticalMinMaxScrollbarThumb: any;
    verticalScrollbarUpButton: any;
    verticalScrollbarDownButton: any;
    sliderWidth: number;
    visualSliderWidth: number;
  }
}
