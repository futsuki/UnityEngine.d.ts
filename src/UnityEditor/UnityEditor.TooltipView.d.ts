declare namespace UnityEditor {
  class TooltipView extends UnityEditor.GUIView {
    // constructors
    constructor();
    // methods
    static Show(tooltip: string, rect: any): void;
    static Close(): void;
    static SetAlpha(percent: number): void;
    // properties
    // fields
  }
}
