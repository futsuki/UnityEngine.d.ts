declare namespace UnityEditor.ObjectTreeForSelector {
  class TreeViewNeededEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((UnityEditor.ObjectTreeForSelector.TreeSelectorData) => void)): void;
    RemoveListener(call: ((UnityEditor.ObjectTreeForSelector.TreeSelectorData) => void)): void;
    Invoke(arg0: UnityEditor.ObjectTreeForSelector.TreeSelectorData): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): any;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: any): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
