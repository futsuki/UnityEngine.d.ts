declare namespace UnityEditor {
  class PaneDragTab extends UnityEditor.GUIView {
    // constructors
    constructor();
    // methods
    SetDropInfo(di: UnityEditor.DropInfo, mouseScreenPos: any, inFrontOf: UnityEditor.ContainerWindow): void;
    Close(): void;
    Show(pixelPos: any, content: any, viewSize: any, mouseScreenPosition: any): void;
    // properties
    static readonly get: UnityEditor.PaneDragTab;
    // fields
  }
}
