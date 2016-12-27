declare namespace UnityEditor.Collaboration {
  class CollabTesting {
    // constructors
    constructor();
    // methods
    static OnCompleteJob(): void;
    static AddAction(action: (() => void)): void;
    static Execute(): void;
    static DropAll(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly ActionsCount: number;
    // fields
  }
}
