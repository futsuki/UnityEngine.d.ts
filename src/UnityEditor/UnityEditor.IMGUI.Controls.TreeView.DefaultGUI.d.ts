declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class DefaultGUI {
    // constructors
    private constructor();
    // methods
    static Label(rect: any, label: string, selected: boolean, focused: boolean): void;
    static LabelRightAligned(rect: any, label: string, selected: boolean, focused: boolean): void;
    static BoldLabel(rect: any, label: string, selected: boolean, focused: boolean): void;
    static BoldLabelRightAligned(rect: any, label: string, selected: boolean, focused: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly contentLeftMargin: number;
    static readonly columnMargin: number;
    // fields
  }
}
