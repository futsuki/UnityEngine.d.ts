declare namespace UnityEditor {
  class DoubleCurvePresetLibrary {
    // constructors
    constructor();
    // methods
    Count(): number;
    GetPreset(index: number): any;
    Add(presetObject: any, presetName: string): any;
    Replace(index: number, newPresetObject: any): any;
    Remove(index: number): any;
    Move(index: number, destIndex: number, insertAfterDestIndex: boolean): any;
    Draw(rect: any, index: number): any;
    Draw(rect: any, presetObject: any): any;
    GetName(index: number): string;
    SetName(index: number, presetName: string): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}
