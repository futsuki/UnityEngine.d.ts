declare namespace UnityEngine.EventSystems {
  class PointerInputModule extends UnityEngine.EventSystems.BaseInputModule {
    // constructors
    protected constructor();
    // methods
    IsPointerOverGameObject(pointerId: number): boolean;
    ToString(): string;
    // properties
    // fields
    static kMouseLeftId: number;
    static kMouseRightId: number;
    static kMouseMiddleId: number;
    static kFakeTouchesId: number;
  }
}
