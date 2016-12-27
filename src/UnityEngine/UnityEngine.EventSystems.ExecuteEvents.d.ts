declare namespace UnityEngine.EventSystems {
  class ExecuteEvents {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly pointerEnterHandler: ((UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerExitHandler: ((UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerDownHandler: ((UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerUpHandler: ((UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerClickHandler: ((UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly initializePotentialDrag: ((UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly beginDragHandler: ((UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly dragHandler: ((UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly endDragHandler: ((UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly dropHandler: ((UnityEngine.EventSystems.IDropHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly scrollHandler: ((UnityEngine.EventSystems.IScrollHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly updateSelectedHandler: ((UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly selectHandler: ((UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly deselectHandler: ((UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly moveHandler: ((UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly submitHandler: ((UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.BaseEventData) => void);
    static readonly cancelHandler: ((UnityEngine.EventSystems.ICancelHandler, UnityEngine.EventSystems.BaseEventData) => void);
    // fields
  }
}
