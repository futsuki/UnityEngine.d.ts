declare namespace UnityEngine.Rendering {
  class GraphicsTier {
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
    static Tier1: UnityEngine.Rendering.GraphicsTier;
    static Tier2: UnityEngine.Rendering.GraphicsTier;
    static Tier3: UnityEngine.Rendering.GraphicsTier;
  }
}
