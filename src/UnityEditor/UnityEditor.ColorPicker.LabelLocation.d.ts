declare namespace UnityEditor.ColorPicker {
  class LabelLocation {
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
    static Top: UnityEditor.ColorPicker.LabelLocation;
    static Bottom: UnityEditor.ColorPicker.LabelLocation;
    static Left: UnityEditor.ColorPicker.LabelLocation;
    static Right: UnityEditor.ColorPicker.LabelLocation;
  }
}
