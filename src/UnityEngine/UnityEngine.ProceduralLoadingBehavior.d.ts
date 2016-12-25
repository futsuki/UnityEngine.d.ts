declare namespace UnityEngine {
  class ProceduralLoadingBehavior {
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
    static DoNothing: UnityEngine.ProceduralLoadingBehavior;
    static Generate: UnityEngine.ProceduralLoadingBehavior;
    static BakeAndKeep: UnityEngine.ProceduralLoadingBehavior;
    static BakeAndDiscard: UnityEngine.ProceduralLoadingBehavior;
    static Cache: UnityEngine.ProceduralLoadingBehavior;
    static DoNothingAndCache: UnityEngine.ProceduralLoadingBehavior;
  }
}
