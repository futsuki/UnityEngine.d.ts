declare namespace UnityEditor.ObjectTreeForSelector {
  class SelectionEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: UnityEditor.IMGUI.Controls.TreeViewItem) => void)): void;
    RemoveListener(call: ((arg0: UnityEditor.IMGUI.Controls.TreeViewItem) => void)): void;
    Invoke(arg0: UnityEditor.IMGUI.Controls.TreeViewItem): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
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
