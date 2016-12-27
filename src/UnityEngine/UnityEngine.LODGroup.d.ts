declare namespace UnityEngine {
  class LODGroup extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    RecalculateBounds(): void;
    GetLODs(): UnityEngine.LOD[];
    SetLODS(lods: UnityEngine.LOD[]): void;
    SetLODs(lods: UnityEngine.LOD[]): void;
    ForceLOD(index: number): void;
    // properties
    localReferencePoint: UnityEngine.Vector3;
    size: number;
    readonly lodCount: number;
    fadeMode: UnityEngine.LODFadeMode;
    animateCrossFading: boolean;
    enabled: boolean;
    static crossFadeAnimationDuration: number;
    // fields
  }
}
