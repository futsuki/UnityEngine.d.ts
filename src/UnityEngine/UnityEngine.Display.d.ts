declare namespace UnityEngine {
  class Display extends System.Object {
    // constructors
    protected constructor();
    // methods
    Activate(): void;
    Activate(width: number, height: number, refreshRate: number): void;
    SetParams(width: number, height: number, x: number, y: number): void;
    SetRenderingResolution(w: number, h: number): void;
    static MultiDisplayLicense(): boolean;
    static RelativeMouseAt(inputMouseCoordinates: UnityEngine.Vector3): UnityEngine.Vector3;
    // properties
    readonly renderingWidth: number;
    readonly renderingHeight: number;
    readonly systemWidth: number;
    readonly systemHeight: number;
    readonly colorBuffer: UnityEngine.RenderBuffer;
    readonly depthBuffer: UnityEngine.RenderBuffer;
    static readonly main: UnityEngine.Display;
    // fields
    static displays: UnityEngine.Display[];
  }
}
