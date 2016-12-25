declare namespace UnityEngine {
  class AsyncOperation {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isDone: boolean;
    readonly progress: number;
    priority: number;
    allowSceneActivation: boolean;
    // fields
  }
}
