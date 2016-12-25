declare namespace UnityEditor.ObjectTreeForSelector {
  class TreeViewNeededEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: any): any;
    RemoveListener(call: any): any;
    Invoke(arg0: UnityEditor.ObjectTreeForSelector.TreeSelectorData): any;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): any;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: any): any;
    RemoveAllListeners(): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
