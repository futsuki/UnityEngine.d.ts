declare namespace UnityEditor {
  class DuckVolumeGUI extends UnityEditor.IAudioEffectPluginGUI {
    // constructors
    constructor();
    // methods
    static BuildGUIStyleForLabel(color: any, fontSize: number, wrapText: boolean, fontstyle: any, anchor: any): any;
    static DrawText(x: number, y: number, text: string): void;
    static DrawLine(x1: number, y1: number, x2: number, y2: number, col: any): void;
    OnGUI(plugin: UnityEditor.IAudioEffectPlugin): boolean;
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
