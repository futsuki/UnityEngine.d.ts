declare namespace UnityEditor.ZoomableArea {
  class Styles extends System.Object {
    // constructors
    constructor(minimalGUI: boolean);
    // methods
    InitGUIStyles(minimalGUI: boolean, enableSliderZoom: boolean): void;
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
