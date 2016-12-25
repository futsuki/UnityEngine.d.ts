declare namespace UnityEngine {
  class SkinQuality {
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
    static Auto: UnityEngine.SkinQuality;
    static Bone1: UnityEngine.SkinQuality;
    static Bone2: UnityEngine.SkinQuality;
    static Bone4: UnityEngine.SkinQuality;
  }
}
