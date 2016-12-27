declare namespace UnityEditor {
  class PreviewResizer extends System.Object {
    // constructors
    constructor();
    // methods
    Init(prefName: string): void;
    ResizeHandle(windowPosition: any, minSize: number, minRemainingSize: number, resizerHeight: number): number;
    ResizeHandle(windowPosition: any, minSize: number, minRemainingSize: number, resizerHeight: number, dragRect: any): number;
    GetExpanded(): boolean;
    GetPreviewSize(): number;
    GetExpandedBeforeDragging(): boolean;
    SetExpanded(expanded: boolean): void;
    ToggleExpanded(): void;
    static PixelPreciseCollapsibleSlider(id: number, position: any, value: number, min: number, max: number, expanded: any): number;
    // properties
    // fields
  }
}
