declare namespace UnityEngine.EventSystems {
  class ExecuteEvents extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    static readonly pointerEnterHandler: ((handler: UnityEngine.EventSystems.IPointerEnterHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerExitHandler: ((handler: UnityEngine.EventSystems.IPointerExitHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerDownHandler: ((handler: UnityEngine.EventSystems.IPointerDownHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerUpHandler: ((handler: UnityEngine.EventSystems.IPointerUpHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerClickHandler: ((handler: UnityEngine.EventSystems.IPointerClickHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly initializePotentialDrag: ((handler: UnityEngine.EventSystems.IInitializePotentialDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly beginDragHandler: ((handler: UnityEngine.EventSystems.IBeginDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly dragHandler: ((handler: UnityEngine.EventSystems.IDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly endDragHandler: ((handler: UnityEngine.EventSystems.IEndDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly dropHandler: ((handler: UnityEngine.EventSystems.IDropHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly scrollHandler: ((handler: UnityEngine.EventSystems.IScrollHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly updateSelectedHandler: ((handler: UnityEngine.EventSystems.IUpdateSelectedHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly selectHandler: ((handler: UnityEngine.EventSystems.ISelectHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly deselectHandler: ((handler: UnityEngine.EventSystems.IDeselectHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly moveHandler: ((handler: UnityEngine.EventSystems.IMoveHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly submitHandler: ((handler: UnityEngine.EventSystems.ISubmitHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly cancelHandler: ((handler: UnityEngine.EventSystems.ICancelHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    // fields
  }
}
