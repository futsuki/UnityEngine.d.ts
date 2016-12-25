declare namespace UnityEditor.DuckVolumeGUI {
  class DragType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEditor.DuckVolumeGUI.DragType;
    static ThresholdAndKnee: UnityEditor.DuckVolumeGUI.DragType;
    static Ratio: UnityEditor.DuckVolumeGUI.DragType;
    static MakeupGain: UnityEditor.DuckVolumeGUI.DragType;
  }
}
