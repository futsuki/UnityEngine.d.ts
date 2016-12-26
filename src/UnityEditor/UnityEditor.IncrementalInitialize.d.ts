declare namespace UnityEditor {
  class IncrementalInitialize {
    // constructors
    constructor();
    // methods
    Restart(): void;
    OnEvent(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly state: UnityEditor.IncrementalInitialize.State;
    // fields
  }
}
