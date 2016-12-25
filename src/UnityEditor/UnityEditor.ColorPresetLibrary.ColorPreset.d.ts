declare namespace UnityEditor.ColorPresetLibrary {
  class ColorPreset {
    // constructors
    constructor(preset: any, presetName: string);
    constructor(preset: any, preset2: any, presetName: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    color: any;
    name: string;
    // fields
  }
}
