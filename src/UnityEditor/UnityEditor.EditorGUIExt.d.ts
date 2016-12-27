declare namespace UnityEditor {
  class EditorGUIExt extends System.Object {
    // constructors
    constructor();
    // methods
    static MinMaxScroller(position: any, id: number, value: any, size: any, visualStart: number, visualEnd: number, startLimit: number, endLimit: number, slider: any, thumb: any, leftButton: any, rightButton: any, horiz: boolean): void;
    static MinMaxSlider(position: any, value: any, size: any, visualStart: number, visualEnd: number, startLimit: number, endLimit: number, slider: any, thumb: any, horiz: boolean): void;
    static DragSelection(positions: any[], selections: any, style: any): boolean;
    static MultiSelection(rect: any, positions: any[], content: any, hitPositions: any[], selections: any, readOnly: boolean[], clickedIndex: any, offset: any, startSelect: any, endSelect: any, style: any): UnityEditor.HighLevelEvent;
    // properties
    // fields
  }
}
