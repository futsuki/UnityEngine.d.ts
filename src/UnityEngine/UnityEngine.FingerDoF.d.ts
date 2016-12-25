declare namespace UnityEngine {
  class FingerDoF {
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
    static ProximalDownUp: UnityEngine.FingerDoF;
    static ProximalInOut: UnityEngine.FingerDoF;
    static IntermediateCloseOpen: UnityEngine.FingerDoF;
    static DistalCloseOpen: UnityEngine.FingerDoF;
    static LastFingerDoF: UnityEngine.FingerDoF;
  }
}
