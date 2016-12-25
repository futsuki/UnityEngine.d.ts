declare namespace UnityEngine {
  class Time {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly time: number;
    static readonly timeSinceLevelLoad: number;
    static readonly deltaTime: number;
    static readonly fixedTime: number;
    static readonly unscaledTime: number;
    static readonly unscaledDeltaTime: number;
    static fixedDeltaTime: number;
    static maximumDeltaTime: number;
    static readonly smoothDeltaTime: number;
    static maximumParticleDeltaTime: number;
    static timeScale: number;
    static readonly frameCount: number;
    static readonly renderedFrameCount: number;
    static readonly realtimeSinceStartup: number;
    static captureFramerate: number;
    // fields
  }
}
