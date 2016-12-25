declare namespace UnityEditor.AudioSourceInspector {
  class AudioCurveWrapper {
    // constructors
    constructor(type: UnityEditor.AudioSourceInspector.AudioCurveType, legend: string, id: number, color: any, curveProp: UnityEditor.SerializedProperty, rangeMin: number, rangeMax: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    type: UnityEditor.AudioSourceInspector.AudioCurveType;
    legend: any;
    id: number;
    color: any;
    curveProp: UnityEditor.SerializedProperty;
    rangeMin: number;
    rangeMax: number;
  }
}
