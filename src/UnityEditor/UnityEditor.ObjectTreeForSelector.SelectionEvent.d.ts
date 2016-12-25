declare namespace UnityEditor.ObjectTreeForSelector {
  class SelectionEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: any): any;
    RemoveListener(call: any): any;
    Invoke(arg0: UnityEditor.IMGUI.Controls.TreeViewItem): any;
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
