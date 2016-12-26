declare namespace UnityEngine.EventSystems {
  class AxisEventData {
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
    moveVector: UnityEngine.Vector2;
    moveDir: UnityEngine.EventSystems.MoveDirection;
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    selectedObject: UnityEngine.GameObject;
    readonly used: boolean;
    // fields
  }
}
