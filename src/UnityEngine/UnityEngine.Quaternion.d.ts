declare namespace UnityEngine {
  class Quaternion {
    // constructors
    private constructor();
    // methods
    static AngleAxis(angle: number, axis: UnityEngine.Vector3): UnityEngine.Quaternion;
    ToAngleAxis(angle: any, axis: any): any;
    static FromToRotation(fromDirection: UnityEngine.Vector3, toDirection: UnityEngine.Vector3): UnityEngine.Quaternion;
    SetFromToRotation(fromDirection: UnityEngine.Vector3, toDirection: UnityEngine.Vector3): any;
    static LookRotation(forward: UnityEngine.Vector3, upwards: UnityEngine.Vector3): UnityEngine.Quaternion;
    static LookRotation(forward: UnityEngine.Vector3): UnityEngine.Quaternion;
    static Slerp(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static SlerpUnclamped(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static Lerp(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static LerpUnclamped(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static RotateTowards(from: UnityEngine.Quaternion, to: UnityEngine.Quaternion, maxDegreesDelta: number): UnityEngine.Quaternion;
    static Inverse(rotation: UnityEngine.Quaternion): UnityEngine.Quaternion;
    static Euler(x: number, y: number, z: number): UnityEngine.Quaternion;
    static Euler(euler: UnityEngine.Vector3): UnityEngine.Quaternion;
    static EulerRotation(x: number, y: number, z: number): UnityEngine.Quaternion;
    static EulerRotation(euler: UnityEngine.Vector3): UnityEngine.Quaternion;
    SetEulerRotation(x: number, y: number, z: number): any;
    SetEulerRotation(euler: UnityEngine.Vector3): any;
    ToEuler(): UnityEngine.Vector3;
    static EulerAngles(x: number, y: number, z: number): UnityEngine.Quaternion;
    static EulerAngles(euler: UnityEngine.Vector3): UnityEngine.Quaternion;
    ToAxisAngle(axis: any, angle: any): any;
    SetEulerAngles(x: number, y: number, z: number): any;
    SetEulerAngles(euler: UnityEngine.Vector3): any;
    static ToEulerAngles(rotation: UnityEngine.Quaternion): UnityEngine.Vector3;
    ToEulerAngles(): UnityEngine.Vector3;
    static AxisAngle(axis: UnityEngine.Vector3, angle: number): UnityEngine.Quaternion;
    SetAxisAngle(axis: UnityEngine.Vector3, angle: number): any;
    Set(new_x: number, new_y: number, new_z: number, new_w: number): any;
    static Dot(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion): number;
    SetLookRotation(view: UnityEngine.Vector3): any;
    SetLookRotation(view: UnityEngine.Vector3, up: UnityEngine.Vector3): any;
    static Angle(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    ToString(format: string): string;
    GetType(): any;
    // properties
    eulerAngles: UnityEngine.Vector3;
    get_Item(index: number): number;
    set_Item(index: number, value: number): any;
    static readonly identity: UnityEngine.Quaternion;
    // fields
    x: number;
    y: number;
    z: number;
    w: number;
    static kEpsilon: number;
  }
}
