declare namespace UnityEngine.iOS {
  class OnDemandResourcesRequest extends UnityEngine.AsyncOperation {
    // constructors
    protected constructor();
    // methods
    GetResourcePath(resourceName: string): string;
    Dispose(): void;
    // properties
    readonly error: string;
    loadingPriority: number;
    // fields
  }
}
