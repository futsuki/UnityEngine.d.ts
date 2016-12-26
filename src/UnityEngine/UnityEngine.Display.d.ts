declare namespace UnityEngine {
  class Display {
    // constructors
    private constructor();
    // methods
    Activate(): void;
    Activate(width: number, height: number, refreshRate: number): void;
    SetParams(width: number, height: number, x: number, y: number): void;
    SetRenderingResolution(w: number, h: number): void;
    static MultiDisplayLicense(): boolean;
    static RelativeMouseAt(inputMouseCoordinates: UnityEngine.Vector3): UnityEngine.Vector3;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
