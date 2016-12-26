declare namespace UnityEditor.ObjectTreeForSelector {
  class DoubleClickedEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: any): void;
    RemoveListener(call: any): void;
    Invoke(): void;
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
