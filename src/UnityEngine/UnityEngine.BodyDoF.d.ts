declare namespace UnityEngine {
  class BodyDoF {
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
    static SpineFrontBack: UnityEngine.BodyDoF;
    static SpineLeftRight: UnityEngine.BodyDoF;
    static SpineRollLeftRight: UnityEngine.BodyDoF;
    static ChestFrontBack: UnityEngine.BodyDoF;
    static ChestLeftRight: UnityEngine.BodyDoF;
    static ChestRollLeftRight: UnityEngine.BodyDoF;
    static LastBodyDoF: UnityEngine.BodyDoF;
  }
}
