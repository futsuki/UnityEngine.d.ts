declare namespace UnityEditor.SplitView {
  class ExtraDropInfo {
    // constructors
    constructor(rootWindow: boolean, edge: UnityEditor.SplitView.ViewEdge, index: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    rootWindow: boolean;
    edge: UnityEditor.SplitView.ViewEdge;
    index: number;
  }
}
