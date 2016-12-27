declare namespace UnityEditor.AudioSourceInspector {
  class AudioCurveWrapper extends System.Object {
    // constructors
    constructor(type: UnityEditor.AudioSourceInspector.AudioCurveType, legend: string, id: number, color: any, curveProp: UnityEditor.SerializedProperty, rangeMin: number, rangeMax: number);
    // methods
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
