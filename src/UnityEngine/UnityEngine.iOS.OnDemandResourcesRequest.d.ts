declare namespace UnityEngine.iOS {
  class OnDemandResourcesRequest {
    // constructors
    private constructor();
    // methods
    GetResourcePath(resourceName: string): string;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly error: string;
    loadingPriority: number;
    readonly isDone: boolean;
    readonly progress: number;
    priority: number;
    allowSceneActivation: boolean;
    // fields
  }
}
