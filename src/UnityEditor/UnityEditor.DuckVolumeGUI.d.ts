declare namespace UnityEditor {
  class DuckVolumeGUI {
    // constructors
    constructor();
    // methods
    static BuildGUIStyleForLabel(color: any, fontSize: number, wrapText: boolean, fontstyle: any, anchor: any): any;
    static DrawText(x: number, y: number, text: string): any;
    static DrawLine(x1: number, y1: number, x2: number, y2: number, col: any): any;
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
    static kThresholdName: string;
    static kRatioName: string;
    static kMakeupGainName: string;
    static kAttackTimeName: string;
    static kReleaseTimeName: string;
    static kKneeName: string;
    static textStyle10: any;
  }
}
