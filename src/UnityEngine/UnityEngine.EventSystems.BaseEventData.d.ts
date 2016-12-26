declare namespace UnityEngine.EventSystems {
  class BaseEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    Reset(): void;
    Use(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    selectedObject: UnityEngine.GameObject;
    readonly used: boolean;
    // fields
  }
}
