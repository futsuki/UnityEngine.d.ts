declare namespace UnityEditor.AI {
  class NavMeshBuilder {
    // constructors
    constructor();
    // methods
    static BuildNavMesh(): any;
    static BuildNavMeshAsync(): any;
    static ClearAllNavMeshes(): any;
    static Cancel(): any;
    static BuildNavMeshForMultipleScenes(paths: string[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly navMeshSettingsObject: any;
    static readonly isRunning: boolean;
    // fields
  }
}
