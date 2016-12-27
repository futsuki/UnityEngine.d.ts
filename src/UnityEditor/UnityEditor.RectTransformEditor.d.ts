declare namespace UnityEditor {
  class RectTransformEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    static SetPivotSmart(rect: any, value: number, axis: number, smart: boolean, parentSpace: boolean): void;
    static SetAnchorSmart(rect: any, value: number, axis: number, isMax: boolean, smart: boolean): void;
    static SetAnchorSmart(rect: any, value: number, axis: number, isMax: boolean, smart: boolean, enforceExactValue: boolean): void;
    static SetAnchorSmart(rect: any, value: number, axis: number, isMax: boolean, smart: boolean, enforceExactValue: boolean, enforceMinNoLargerThanMax: boolean, moveTogether: boolean): void;
    // properties
    // fields
  }
}
