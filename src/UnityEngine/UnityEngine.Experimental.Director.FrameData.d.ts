declare namespace UnityEngine.Experimental.Director {
  class FrameData {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly updateId: number;
    readonly time: number;
    readonly lastTime: number;
    readonly deltaTime: number;
    readonly timeScale: number;
    readonly dTime: number;
    readonly dLastTime: number;
    readonly dDeltaTime: number;
    readonly dtimeScale: number;
    // fields
  }
}
