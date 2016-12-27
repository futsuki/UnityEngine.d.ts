declare namespace UnityEngineInternal {
  class GIDebugVisualisation extends System.Object {
    // constructors
    constructor();
    // methods
    static ResetRuntimeInputTextures(): void;
    static PlayCycleMode(): void;
    static PauseCycleMode(): void;
    static StopCycleMode(): void;
    static CycleSkipInstances(skip: number): void;
    static CycleSkipSystems(skip: number): void;
    // properties
    static readonly cycleMode: boolean;
    static readonly pauseCycleMode: boolean;
    static texType: UnityEngineInternal.GITextureType;
    // fields
  }
}
