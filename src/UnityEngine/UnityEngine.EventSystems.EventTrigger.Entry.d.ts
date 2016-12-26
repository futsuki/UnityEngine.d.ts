declare namespace UnityEngine.EventSystems.EventTrigger {
  class Entry {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    eventID: UnityEngine.EventSystems.EventTriggerType;
    callback: UnityEngine.EventSystems.EventTrigger.TriggerEvent;
  }
}
