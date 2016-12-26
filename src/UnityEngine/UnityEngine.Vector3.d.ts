declare namespace UnityEngine {
  class Vector3 {
    // constructors
    private constructor();
    // methods
    static Slerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static SlerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static OrthoNormalize(normal: any, tangent: any): void;
    static OrthoNormalize(normal: any, tangent: any, binormal: any): void;
    static RotateTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number): UnityEngine.Vector3;
    static Exclude(excludeThis: UnityEngine.Vector3, fromThat: UnityEngine.Vector3): UnityEngine.Vector3;
    static Lerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static LerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static MoveTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxDistanceDelta: number): UnityEngine.Vector3;
    static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: any, smoothTime: number, maxSpeed: number): UnityEngine.Vector3;
    static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: any, smoothTime: number): UnityEngine.Vector3;
    static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: any, smoothTime: number, maxSpeed: number, deltaTime: number): UnityEngine.Vector3;
    Set(new_x: number, new_y: number, new_z: number): void;
    static Scale(a: UnityEngine.Vector3, b: UnityEngine.Vector3): UnityEngine.Vector3;
    Scale(scale: UnityEngine.Vector3): void;
    static Cross(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Reflect(inDirection: UnityEngine.Vector3, inNormal: UnityEngine.Vector3): UnityEngine.Vector3;
    static Normalize(value: UnityEngine.Vector3): UnityEngine.Vector3;
    Normalize(): void;
    static Dot(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): number;
    static Project(vector: UnityEngine.Vector3, onNormal: UnityEngine.Vector3): UnityEngine.Vector3;
    static ProjectOnPlane(vector: UnityEngine.Vector3, planeNormal: UnityEngine.Vector3): UnityEngine.Vector3;
    static Angle(from: UnityEngine.Vector3, to: UnityEngine.Vector3): number;
    static Distance(a: UnityEngine.Vector3, b: UnityEngine.Vector3): number;
    static ClampMagnitude(vector: UnityEngine.Vector3, maxLength: number): UnityEngine.Vector3;
    static Magnitude(a: UnityEngine.Vector3): number;
    static SqrMagnitude(a: UnityEngine.Vector3): number;
    static Min(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
    static Max(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
    ToString(): string;
    ToString(format: string): string;
    static AngleBetween(from: UnityEngine.Vector3, to: UnityEngine.Vector3): number;
    GetType(): any;
    // properties
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    readonly normalized: UnityEngine.Vector3;
    readonly magnitude: number;
    readonly sqrMagnitude: number;
    static readonly zero: UnityEngine.Vector3;
    static readonly one: UnityEngine.Vector3;
    static readonly forward: UnityEngine.Vector3;
    static readonly back: UnityEngine.Vector3;
    static readonly up: UnityEngine.Vector3;
    static readonly down: UnityEngine.Vector3;
    static readonly left: UnityEngine.Vector3;
    static readonly right: UnityEngine.Vector3;
    static readonly fwd: UnityEngine.Vector3;
    // fields
    static kEpsilon: number;
    x: number;
    y: number;
    z: number;
  }
}
