declare namespace UnityEditor.EditorGUI {
  class VUMeter {
    // constructors
    constructor();
    // methods
    static HorizontalMeter(position: any, value: number, peak: number, foregroundTexture: any, peakColor: any): void;
    static VerticalMeter(position: any, value: number, peak: number, foregroundTexture: any, peakColor: any): void;
    static HorizontalMeter(position: any, value: number, data: any, foregroundTexture: any, peakColor: any): void;
    static VerticalMeter(position: any, value: number, data: any, foregroundTexture: any, peakColor: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly verticalVUTexture: any;
    static readonly horizontalVUTexture: any;
    // fields
  }
}
