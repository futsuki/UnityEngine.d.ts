declare namespace UnityEditor {
  class ParamEqGUI {
    // constructors
    constructor();
    // methods
    static BuildGUIStyleForLabel(color: any, fontSize: number, wrapText: boolean, fontstyle: any, anchor: any): any;
    OnGUI(plugin: UnityEditor.IAudioEffectPlugin): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Name: string;
    readonly Description: string;
    readonly Vendor: string;
    // fields
    static kCenterFreqName: string;
    static kOctaveRangeName: string;
    static kFrequencyGainName: string;
    static textStyle10: any;
  }
}
