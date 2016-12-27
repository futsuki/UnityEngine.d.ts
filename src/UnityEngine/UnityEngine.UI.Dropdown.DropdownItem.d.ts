declare namespace UnityEngine.UI.Dropdown {
  class DropdownItem extends UnityEngine.MonoBehaviour {
    // constructors
    constructor();
    // methods
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    text: UnityEngine.UI.Text;
    image: UnityEngine.UI.Image;
    rectTransform: UnityEngine.RectTransform;
    toggle: UnityEngine.UI.Toggle;
    // fields
  }
}
