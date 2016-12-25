declare namespace UnityEngine {
  class UnityEventQueueSystem {
    // constructors
    constructor();
    // methods
    static GenerateEventIdForPayload(eventPayloadName: string): string;
    static GetGlobalEventQueue(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
