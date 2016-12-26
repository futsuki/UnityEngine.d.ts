declare namespace UnityEngine {
  class Vector2 {
    // constructors
    private constructor();
    // methods
    Set(newX: number, newY: number): void;
    static Lerp(a: UnityEngine.Vector2, b: UnityEngine.Vector2, t: number): UnityEngine.Vector2;
    static LerpUnclamped(a: UnityEngine.Vector2, b: UnityEngine.Vector2, t: number): UnityEngine.Vector2;
    static MoveTowards(current: UnityEngine.Vector2, target: UnityEngine.Vector2, maxDistanceDelta: number): UnityEngine.Vector2;
    static Scale(a: UnityEngine.Vector2, b: UnityEngine.Vector2): UnityEngine.Vector2;
    Scale(scale: UnityEngine.Vector2): void;
    Normalize(): void;
    ToString(): string;
    ToString(format: string): string;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Reflect(inDirection: UnityEngine.Vector2, inNormal: UnityEngine.Vector2): UnityEngine.Vector2;
    static Dot(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2): number;
    static Angle(from: UnityEngine.Vector2, to: UnityEngine.Vector2): number;
    static Distance(a: UnityEngine.Vector2, b: UnityEngine.Vector2): number;
    static ClampMagnitude(vector: UnityEngine.Vector2, maxLength: number): UnityEngine.Vector2;
    static SqrMagnitude(a: UnityEngine.Vector2): number;
    SqrMagnitude(): number;
    static Min(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2): UnityEngine.Vector2;
    static Max(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2): UnityEngine.Vector2;
    static SmoothDamp(current: UnityEngine.Vector2, target: UnityEngine.Vector2, currentVelocity: any, smoothTime: number, maxSpeed: number, deltaTime: number): UnityEngine.Vector2;
    GetType(): any;
    // properties
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    readonly normalized: UnityEngine.Vector2;
    readonly magnitude: number;
    readonly sqrMagnitude: number;
    static readonly zero: UnityEngine.Vector2;
    static readonly one: UnityEngine.Vector2;
    static readonly up: UnityEngine.Vector2;
    static readonly down: UnityEngine.Vector2;
    static readonly left: UnityEngine.Vector2;
    static readonly right: UnityEngine.Vector2;
    // fields
    x: number;
    y: number;
    static kEpsilon: number;
  }
}
