declare namespace UnityEngine.SceneManagement {
  class Scene extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsValid(): boolean;
    GetRootGameObjects(): UnityEngine.GameObject[];
    GetRootGameObjects(rootGameObjects: UnityEngine.GameObject[]): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    // properties
    readonly path: string;
    readonly name: string;
    readonly isLoaded: boolean;
    readonly buildIndex: number;
    readonly isDirty: boolean;
    readonly rootCount: number;
    // fields
  }
}
