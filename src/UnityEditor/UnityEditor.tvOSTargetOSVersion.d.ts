declare namespace UnityEditor {
  class tvOSTargetOSVersion {
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
    static Unknown: UnityEditor.tvOSTargetOSVersion;
    static tvOS_9_0: UnityEditor.tvOSTargetOSVersion;
    static tvOS_9_1: UnityEditor.tvOSTargetOSVersion;
  }
}
