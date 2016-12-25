declare namespace UnityEngine {
  class HeadDoF {
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
    static NeckFrontBack: UnityEngine.HeadDoF;
    static NeckLeftRight: UnityEngine.HeadDoF;
    static NeckRollLeftRight: UnityEngine.HeadDoF;
    static HeadFrontBack: UnityEngine.HeadDoF;
    static HeadLeftRight: UnityEngine.HeadDoF;
    static HeadRollLeftRight: UnityEngine.HeadDoF;
    static LeftEyeDownUp: UnityEngine.HeadDoF;
    static LeftEyeInOut: UnityEngine.HeadDoF;
    static RightEyeDownUp: UnityEngine.HeadDoF;
    static RightEyeInOut: UnityEngine.HeadDoF;
    static JawDownUp: UnityEngine.HeadDoF;
    static JawLeftRight: UnityEngine.HeadDoF;
    static LastHeadDoF: UnityEngine.HeadDoF;
  }
}
