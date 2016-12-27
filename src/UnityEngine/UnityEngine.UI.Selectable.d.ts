declare namespace UnityEngine.UI {
  class Selectable extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    IsInteractable(): boolean;
    FindSelectable(dir: UnityEngine.Vector3): UnityEngine.UI.Selectable;
    FindSelectableOnLeft(): UnityEngine.UI.Selectable;
    FindSelectableOnRight(): UnityEngine.UI.Selectable;
    FindSelectableOnUp(): UnityEngine.UI.Selectable;
    FindSelectableOnDown(): UnityEngine.UI.Selectable;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerExit(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    Select(): void;
    // properties
    static readonly allSelectables: UnityEngine.UI.Selectable[];
    navigation: UnityEngine.UI.Navigation;
    transition: UnityEngine.UI.Selectable.Transition;
    colors: UnityEngine.UI.ColorBlock;
    spriteState: UnityEngine.UI.SpriteState;
    animationTriggers: UnityEngine.UI.AnimationTriggers;
    targetGraphic: UnityEngine.UI.Graphic;
    interactable: boolean;
    image: UnityEngine.UI.Image;
    readonly animator: UnityEngine.Animator;
    // fields
  }
}
