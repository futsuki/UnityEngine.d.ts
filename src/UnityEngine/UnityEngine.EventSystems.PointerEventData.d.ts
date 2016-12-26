declare namespace UnityEngine.EventSystems {
  class PointerEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    IsPointerMoving(): boolean;
    IsScrolling(): boolean;
    ToString(): string;
    Reset(): void;
    Use(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    pointerEnter: UnityEngine.GameObject;
    readonly lastPress: UnityEngine.GameObject;
    rawPointerPress: UnityEngine.GameObject;
    pointerDrag: UnityEngine.GameObject;
    pointerCurrentRaycast: UnityEngine.EventSystems.RaycastResult;
    pointerPressRaycast: UnityEngine.EventSystems.RaycastResult;
    eligibleForClick: boolean;
    pointerId: number;
    position: UnityEngine.Vector2;
    delta: UnityEngine.Vector2;
    pressPosition: UnityEngine.Vector2;
    worldPosition: UnityEngine.Vector3;
    worldNormal: UnityEngine.Vector3;
    clickTime: number;
    clickCount: number;
    scrollDelta: UnityEngine.Vector2;
    useDragThreshold: boolean;
    dragging: boolean;
    button: UnityEngine.EventSystems.PointerEventData.InputButton;
    readonly enterEventCamera: UnityEngine.Camera;
    readonly pressEventCamera: UnityEngine.Camera;
    pointerPress: UnityEngine.GameObject;
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    selectedObject: UnityEngine.GameObject;
    readonly used: boolean;
    // fields
    hovered: any;
  }
}
