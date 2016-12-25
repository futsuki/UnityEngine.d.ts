declare namespace UnityEngine {
  class BlendWeights {
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
    static OneBone: UnityEngine.BlendWeights;
    static TwoBones: UnityEngine.BlendWeights;
    static FourBones: UnityEngine.BlendWeights;
  }
}
