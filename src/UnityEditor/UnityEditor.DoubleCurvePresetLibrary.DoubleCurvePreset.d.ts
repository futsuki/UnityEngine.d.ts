declare namespace UnityEditor.DoubleCurvePresetLibrary {
  class DoubleCurvePreset {
    // constructors
    constructor(doubleCurvePreset: UnityEditor.DoubleCurve, presetName: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    doubleCurve: UnityEditor.DoubleCurve;
    name: string;
    // fields
  }
}
