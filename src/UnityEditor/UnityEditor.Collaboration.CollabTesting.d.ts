declare namespace UnityEditor.Collaboration {
  class CollabTesting extends System.Object {
    // constructors
    constructor();
    // methods
    static OnCompleteJob(): void;
    static AddAction(action: (() => void)): void;
    static Execute(): void;
    static DropAll(): void;
    // properties
    static readonly ActionsCount: number;
    // fields
  }
}
