declare namespace UnityEngine {
  class Vector4 {
    // constructors
    private constructor();
    // methods
    Set(new_x: number, new_y: number, new_z: number, new_w: number): void;
    static Lerp(a: UnityEngine.Vector4, b: UnityEngine.Vector4, t: number): UnityEngine.Vector4;
    static LerpUnclamped(a: UnityEngine.Vector4, b: UnityEngine.Vector4, t: number): UnityEngine.Vector4;
    static MoveTowards(current: UnityEngine.Vector4, target: UnityEngine.Vector4, maxDistanceDelta: number): UnityEngine.Vector4;
    static Scale(a: UnityEngine.Vector4, b: UnityEngine.Vector4): UnityEngine.Vector4;
    Scale(scale: UnityEngine.Vector4): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Normalize(a: UnityEngine.Vector4): UnityEngine.Vector4;
    Normalize(): void;
    static Dot(a: UnityEngine.Vector4, b: UnityEngine.Vector4): number;
    static Project(a: UnityEngine.Vector4, b: UnityEngine.Vector4): UnityEngine.Vector4;
    static Distance(a: UnityEngine.Vector4, b: UnityEngine.Vector4): number;
    static Magnitude(a: UnityEngine.Vector4): number;
    static Min(lhs: UnityEngine.Vector4, rhs: UnityEngine.Vector4): UnityEngine.Vector4;
    static Max(lhs: UnityEngine.Vector4, rhs: UnityEngine.Vector4): UnityEngine.Vector4;
    ToString(): string;
    ToString(format: string): string;
    static SqrMagnitude(a: UnityEngine.Vector4): number;
    SqrMagnitude(): number;
    GetType(): any;
    // properties
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    readonly normalized: UnityEngine.Vector4;
    readonly magnitude: number;
    readonly sqrMagnitude: number;
    static readonly zero: UnityEngine.Vector4;
    static readonly one: UnityEngine.Vector4;
    // fields
    static kEpsilon: number;
    x: number;
    y: number;
    z: number;
    w: number;
  }
}
