declare namespace UnityEditor.TransformManipulator {
  class TransformData extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static GetData(t: any): UnityEditor.TransformManipulator.TransformData;
    SetScaleDelta(scaleDelta: any, scalePivot: any, scaleRotation: any, preferRectResize: boolean): void;
    SetPositionDelta(positionDelta: any): void;
    DebugAlignment(targetRotation: any): void;
    // properties
    // fields
    static s_Alignments: any[];
    transform: any;
    position: any;
    localPosition: any;
    rotation: any;
    scale: any;
    rectTransform: any;
    rect: any;
    anchoredPosition: any;
    sizeDelta: any;
  }
}
