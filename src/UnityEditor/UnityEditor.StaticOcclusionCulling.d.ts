declare namespace UnityEditor {
  class StaticOcclusionCulling {
    // constructors
    constructor();
    // methods
    static Compute(): boolean;
    static GenerateInBackground(): boolean;
    static Cancel(): void;
    static Clear(): void;
    static SetDefaultOcclusionBakeSettings(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isRunning: boolean;
    static smallestOccluder: number;
    static smallestHole: number;
    static backfaceThreshold: number;
    static readonly doesSceneHaveManualPortals: boolean;
    static readonly umbraDataSize: number;
    // fields
  }
}
