declare namespace UnityEditor.EditorGUI {
  class VUMeter extends System.Object {
    // constructors
    constructor();
    // methods
    static HorizontalMeter(position: any, value: number, peak: number, foregroundTexture: any, peakColor: any): void;
    static HorizontalMeter(position: any, value: number, data: any, foregroundTexture: any, peakColor: any): void;
    static VerticalMeter(position: any, value: number, peak: number, foregroundTexture: any, peakColor: any): void;
    static VerticalMeter(position: any, value: number, data: any, foregroundTexture: any, peakColor: any): void;
    // properties
    static readonly verticalVUTexture: any;
    static readonly horizontalVUTexture: any;
    // fields
  }
}
