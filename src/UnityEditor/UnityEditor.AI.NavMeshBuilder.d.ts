declare namespace UnityEditor.AI {
  class NavMeshBuilder extends System.Object {
    // constructors
    constructor();
    // methods
    static BuildNavMesh(): void;
    static BuildNavMeshAsync(): void;
    static ClearAllNavMeshes(): void;
    static Cancel(): void;
    static BuildNavMeshForMultipleScenes(paths: string[]): void;
    // properties
    static readonly navMeshSettingsObject: UnityEngine.Object;
    static readonly isRunning: boolean;
    // fields
  }
}
