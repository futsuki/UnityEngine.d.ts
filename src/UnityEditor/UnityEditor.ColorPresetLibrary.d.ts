declare namespace UnityEditor {
  class ColorPresetLibrary extends UnityEditor.PresetLibrary {
    // constructors
    constructor();
    // methods
    Count(): number;
    GetPreset(index: number): any;
    Add(presetObject: any, presetName: string): void;
    Replace(index: number, newPresetObject: any): void;
    Remove(index: number): void;
    Move(index: number, destIndex: number, insertAfterDestIndex: boolean): void;
    Draw(rect: any, index: number): void;
    Draw(rect: any, presetObject: any): void;
    GetName(index: number): string;
    SetName(index: number, presetName: string): void;
    CreateDebugColors(): void;
    // properties
    // fields
    static kSwatchSize: number;
    static kMiniSwatchSize: number;
  }
}
