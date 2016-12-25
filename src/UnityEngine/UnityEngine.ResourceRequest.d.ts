declare namespace UnityEngine {
  class ResourceRequest {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly asset: UnityEngine.Object;
    readonly isDone: boolean;
    readonly progress: number;
    priority: number;
    allowSceneActivation: boolean;
    // fields
  }
}
