declare namespace UnityEngine {
  class JointDriveMode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEngine.JointDriveMode;
    static Position: UnityEngine.JointDriveMode;
    static Velocity: UnityEngine.JointDriveMode;
    static PositionAndVelocity: UnityEngine.JointDriveMode;
  }
}
