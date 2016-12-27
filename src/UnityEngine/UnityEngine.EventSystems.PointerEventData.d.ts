declare namespace UnityEngine.EventSystems {
  class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    IsPointerMoving(): boolean;
    IsScrolling(): boolean;
    ToString(): string;
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
    // fields
    hovered: UnityEngine.GameObject[];
  }
}
