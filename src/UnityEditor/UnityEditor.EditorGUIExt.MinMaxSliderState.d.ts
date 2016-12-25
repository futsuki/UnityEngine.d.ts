declare namespace UnityEditor.EditorGUIExt {
  class MinMaxSliderState {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    dragStartPos: number;
    dragStartValue: number;
    dragStartSize: number;
    dragStartValuesPerPixel: number;
    dragStartLimit: number;
    dragEndLimit: number;
    whereWeDrag: number;
  }
}
