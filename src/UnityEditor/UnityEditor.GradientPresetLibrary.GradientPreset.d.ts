declare namespace UnityEditor.GradientPresetLibrary {
  class GradientPreset {
    // constructors
    constructor(preset: any, presetName: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    gradient: any;
    name: string;
    // fields
  }
}
