declare namespace UnityEngine.UI {
  class Dropdown {
    // constructors
    private constructor();
    // methods
    RefreshShownValue(): void;
    AddOptions(options: any): void;
    AddOptions(options: any): void;
    AddOptions(options: any): void;
    ClearOptions(): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    Show(): void;
    Hide(): void;
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
    IsActive(): boolean;
    IsDestroyed(): boolean;
    Invoke(methodName: string, time: number): void;
    InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
    CancelInvoke(): void;
    CancelInvoke(methodName: string): void;
    IsInvoking(methodName: string): boolean;
    IsInvoking(): boolean;
    StartCoroutine(routine: any): UnityEngine.Coroutine;
    StartCoroutine_Auto(routine: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string): UnityEngine.Coroutine;
    StopCoroutine(methodName: string): void;
    StopCoroutine(routine: any): void;
    StopCoroutine(routine: UnityEngine.Coroutine): void;
    StopAllCoroutines(): void;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: any): void;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    template: UnityEngine.RectTransform;
    captionText: UnityEngine.UI.Text;
    captionImage: UnityEngine.UI.Image;
    itemText: UnityEngine.UI.Text;
    itemImage: UnityEngine.UI.Image;
    options: any;
    onValueChanged: UnityEngine.UI.Dropdown.DropdownEvent;
    value: number;
    navigation: UnityEngine.UI.Navigation;
    transition: UnityEngine.UI.Selectable.Transition;
    colors: UnityEngine.UI.ColorBlock;
    spriteState: UnityEngine.UI.SpriteState;
    animationTriggers: UnityEngine.UI.AnimationTriggers;
    targetGraphic: UnityEngine.UI.Graphic;
    interactable: boolean;
    image: UnityEngine.UI.Image;
    readonly animator: UnityEngine.Animator;
    useGUILayout: boolean;
    runInEditMode: boolean;
    enabled: boolean;
    readonly isActiveAndEnabled: boolean;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
