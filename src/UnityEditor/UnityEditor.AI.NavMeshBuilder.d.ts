declare namespace UnityEditor.AI {
  class NavMeshBuilder {
    // constructors
    constructor();
    // methods
    static BuildNavMesh(): void;
    static BuildNavMeshAsync(): void;
    static ClearAllNavMeshes(): void;
    static Cancel(): void;
    static BuildNavMeshForMultipleScenes(paths: string[]): void;
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
