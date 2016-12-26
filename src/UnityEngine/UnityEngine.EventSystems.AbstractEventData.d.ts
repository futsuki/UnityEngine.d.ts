declare namespace UnityEngine.EventSystems {
  class AbstractEventData {
    // constructors
    private constructor();
    // methods
    Reset(): void;
    Use(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly used: boolean;
    // fields
  }
}
