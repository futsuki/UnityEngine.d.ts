declare namespace UnityEngineInternal {
  class GIDebugVisualisation {
    // constructors
    constructor();
    // methods
    static ResetRuntimeInputTextures(): any;
    static PlayCycleMode(): any;
    static PauseCycleMode(): any;
    static StopCycleMode(): any;
    static CycleSkipInstances(skip: number): any;
    static CycleSkipSystems(skip: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly cycleMode: boolean;
    static readonly pauseCycleMode: boolean;
    static texType: UnityEngineInternal.GITextureType;
    // fields
  }
}
