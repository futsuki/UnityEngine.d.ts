declare namespace UnityEngine.EventSystems {
  class EventSystem extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    UpdateModules(): void;
    SetSelectedGameObject(selected: UnityEngine.GameObject, pointer: UnityEngine.EventSystems.BaseEventData): void;
    SetSelectedGameObject(selected: UnityEngine.GameObject): void;
    RaycastAll(eventData: UnityEngine.EventSystems.PointerEventData, raycastResults: UnityEngine.EventSystems.RaycastResult[]): void;
    IsPointerOverGameObject(): boolean;
    IsPointerOverGameObject(pointerId: number): boolean;
    ToString(): string;
    // properties
    static current: UnityEngine.EventSystems.EventSystem;
    sendNavigationEvents: boolean;
    pixelDragThreshold: number;
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    firstSelectedGameObject: UnityEngine.GameObject;
    readonly currentSelectedGameObject: UnityEngine.GameObject;
    readonly lastSelectedGameObject: UnityEngine.GameObject;
    readonly alreadySelecting: boolean;
    // fields
  }
}
