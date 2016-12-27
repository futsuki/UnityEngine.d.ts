declare namespace UnityEditor {
  class StaticOcclusionCulling extends System.Object {
    // constructors
    constructor();
    // methods
    static Compute(): boolean;
    static GenerateInBackground(): boolean;
    static Cancel(): void;
    static Clear(): void;
    static SetDefaultOcclusionBakeSettings(): void;
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
