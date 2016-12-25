declare namespace UnityEngine {
  class iPhoneTouch {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly positionDelta: UnityEngine.Vector2;
    readonly timeDelta: number;
    readonly fingerId: number;
    readonly position: UnityEngine.Vector2;
    readonly deltaPosition: UnityEngine.Vector2;
    readonly deltaTime: number;
    readonly tapCount: number;
    readonly phase: UnityEngine.iPhoneTouchPhase;
    // fields
  }
}
