declare namespace UnityEngine.SceneManagement {
  class Scene {
    // constructors
    private constructor();
    // methods
    IsValid(): boolean;
    GetRootGameObjects(): UnityEngine.GameObject[];
    GetRootGameObjects(rootGameObjects: any): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    GetType(): any;
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
