declare namespace UnityEngine {
  class LegDoF {
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
    static UpperLegFrontBack: UnityEngine.LegDoF;
    static UpperLegInOut: UnityEngine.LegDoF;
    static UpperLegRollInOut: UnityEngine.LegDoF;
    static LegCloseOpen: UnityEngine.LegDoF;
    static LegRollInOut: UnityEngine.LegDoF;
    static FootCloseOpen: UnityEngine.LegDoF;
    static FootInOut: UnityEngine.LegDoF;
    static ToesUpDown: UnityEngine.LegDoF;
    static LastLegDoF: UnityEngine.LegDoF;
  }
}
