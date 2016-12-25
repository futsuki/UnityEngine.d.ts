declare namespace UnityEditor.SketchUpImporterModelEditor {
  class EFileUnit {
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
    static Meters: UnityEditor.SketchUpImporterModelEditor.EFileUnit;
    static Centimeters: UnityEditor.SketchUpImporterModelEditor.EFileUnit;
    static Millimeters: UnityEditor.SketchUpImporterModelEditor.EFileUnit;
    static Feet: UnityEditor.SketchUpImporterModelEditor.EFileUnit;
    static Inches: UnityEditor.SketchUpImporterModelEditor.EFileUnit;
  }
}
