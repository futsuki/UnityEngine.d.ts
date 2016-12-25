declare namespace UnityEditor {
  class EditorGUIExt {
    // constructors
    constructor();
    // methods
    static MinMaxScroller(position: any, id: number, value: any, size: any, visualStart: number, visualEnd: number, startLimit: number, endLimit: number, slider: any, thumb: any, leftButton: any, rightButton: any, horiz: boolean): any;
    static MinMaxSlider(position: any, value: any, size: any, visualStart: number, visualEnd: number, startLimit: number, endLimit: number, slider: any, thumb: any, horiz: boolean): any;
    static DragSelection(positions: any[], selections: any, style: any): boolean;
    static MultiSelection(rect: any, positions: any[], content: any, hitPositions: any[], selections: any, readOnly: boolean[], clickedIndex: any, offset: any, startSelect: any, endSelect: any, style: any): UnityEditor.HighLevelEvent;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
