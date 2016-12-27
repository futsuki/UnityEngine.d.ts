declare namespace UnityEngine.UI {
  class Dropdown extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    RefreshShownValue(): void;
    AddOptions(options: UnityEngine.UI.Dropdown.OptionData[]): void;
    AddOptions(options: string[]): void;
    AddOptions(options: UnityEngine.Sprite[]): void;
    ClearOptions(): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    Show(): void;
    Hide(): void;
    // properties
    template: UnityEngine.RectTransform;
    captionText: UnityEngine.UI.Text;
    captionImage: UnityEngine.UI.Image;
    itemText: UnityEngine.UI.Text;
    itemImage: UnityEngine.UI.Image;
    options: UnityEngine.UI.Dropdown.OptionData[];
    onValueChanged: UnityEngine.UI.Dropdown.DropdownEvent;
    value: number;
    // fields
  }
}
