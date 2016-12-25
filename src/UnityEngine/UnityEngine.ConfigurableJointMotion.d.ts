declare namespace UnityEngine {
  class ConfigurableJointMotion {
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
    static Locked: UnityEngine.ConfigurableJointMotion;
    static Limited: UnityEngine.ConfigurableJointMotion;
    static Free: UnityEngine.ConfigurableJointMotion;
  }
}
