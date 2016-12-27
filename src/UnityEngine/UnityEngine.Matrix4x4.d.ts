declare namespace UnityEngine {
  class Matrix4x4 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Inverse(m: UnityEngine.Matrix4x4): UnityEngine.Matrix4x4;
    static Transpose(m: UnityEngine.Matrix4x4): UnityEngine.Matrix4x4;
    static Determinant(m: UnityEngine.Matrix4x4): number;
    SetTRS(pos: UnityEngine.Vector3, q: UnityEngine.Quaternion, s: UnityEngine.Vector3): void;
    static TRS(pos: UnityEngine.Vector3, q: UnityEngine.Quaternion, s: UnityEngine.Vector3): UnityEngine.Matrix4x4;
    static Ortho(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): UnityEngine.Matrix4x4;
    static Perspective(fov: number, aspect: number, zNear: number, zFar: number): UnityEngine.Matrix4x4;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetColumn(i: number): UnityEngine.Vector4;
    GetRow(i: number): UnityEngine.Vector4;
    SetColumn(i: number, v: UnityEngine.Vector4): void;
    SetRow(i: number, v: UnityEngine.Vector4): void;
    MultiplyPoint(v: UnityEngine.Vector3): UnityEngine.Vector3;
    MultiplyPoint3x4(v: UnityEngine.Vector3): UnityEngine.Vector3;
    MultiplyVector(v: UnityEngine.Vector3): UnityEngine.Vector3;
    static Scale(v: UnityEngine.Vector3): UnityEngine.Matrix4x4;
    ToString(): string;
    ToString(format: string): string;
    // properties
    readonly inverse: UnityEngine.Matrix4x4;
    readonly transpose: UnityEngine.Matrix4x4;
    readonly isIdentity: boolean;
    readonly determinant: number;
    get_Item(row: number, column: number): number;
    set_Item(row: number, column: number, value: number): void;
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    static readonly zero: UnityEngine.Matrix4x4;
    static readonly identity: UnityEngine.Matrix4x4;
    // fields
    m00: number;
    m10: number;
    m20: number;
    m30: number;
    m01: number;
    m11: number;
    m21: number;
    m31: number;
    m02: number;
    m12: number;
    m22: number;
    m32: number;
    m03: number;
    m13: number;
    m23: number;
    m33: number;
  }
}
