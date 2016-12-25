declare namespace UnityEditor {
  class UnityStats {
    // constructors
    constructor();
    // methods
    static GetNetworkStats(i: number): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly batches: number;
    static readonly drawCalls: number;
    static readonly dynamicBatchedDrawCalls: number;
    static readonly staticBatchedDrawCalls: number;
    static readonly instancedBatchedDrawCalls: number;
    static readonly dynamicBatches: number;
    static readonly staticBatches: number;
    static readonly instancedBatches: number;
    static readonly setPassCalls: number;
    static readonly triangles: number;
    static readonly vertices: number;
    static readonly shadowCasters: number;
    static readonly renderTextureChanges: number;
    static readonly frameTime: number;
    static readonly renderTime: number;
    static readonly audioLevel: number;
    static readonly audioClippingAmount: number;
    static readonly audioDSPLoad: number;
    static readonly audioStreamLoad: number;
    static readonly renderTextureCount: number;
    static readonly renderTextureBytes: number;
    static readonly usedTextureMemorySize: number;
    static readonly usedTextureCount: number;
    static readonly screenRes: string;
    static readonly screenBytes: number;
    static readonly vboTotal: number;
    static readonly vboTotalBytes: number;
    static readonly vboUploads: number;
    static readonly vboUploadBytes: number;
    static readonly ibUploads: number;
    static readonly ibUploadBytes: number;
    static readonly visibleSkinnedMeshes: number;
    static readonly visibleAnimations: number;
    // fields
  }
}
