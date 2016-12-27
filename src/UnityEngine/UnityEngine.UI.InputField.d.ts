declare namespace UnityEngine.UI {
  class InputField extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    MoveTextEnd(shift: boolean): void;
    MoveTextStart(shift: boolean): void;
    ScreenToLocal(screen: UnityEngine.Vector2): UnityEngine.Vector2;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    ProcessEvent(e: UnityEngine.Event): void;
    OnUpdateSelected(eventData: UnityEngine.EventSystems.BaseEventData): void;
    ForceLabelUpdate(): void;
    Rebuild(update: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    ActivateInputField(): void;
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    DeactivateInputField(): void;
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    // properties
    shouldHideMobileInput: boolean;
    text: string;
    readonly isFocused: boolean;
    caretBlinkRate: number;
    caretWidth: number;
    textComponent: UnityEngine.UI.Text;
    placeholder: UnityEngine.UI.Graphic;
    caretColor: UnityEngine.Color;
    customCaretColor: boolean;
    selectionColor: UnityEngine.Color;
    onEndEdit: UnityEngine.UI.InputField.SubmitEvent;
    onValueChange: UnityEngine.UI.InputField.OnChangeEvent;
    onValueChanged: UnityEngine.UI.InputField.OnChangeEvent;
    onValidateInput: ((text: string, charIndex: number, addedChar: any) => any);
    characterLimit: number;
    contentType: UnityEngine.UI.InputField.ContentType;
    lineType: UnityEngine.UI.InputField.LineType;
    inputType: UnityEngine.UI.InputField.InputType;
    keyboardType: UnityEngine.TouchScreenKeyboardType;
    characterValidation: UnityEngine.UI.InputField.CharacterValidation;
    readOnly: boolean;
    readonly multiLine: boolean;
    asteriskChar: any;
    readonly wasCanceled: boolean;
    readonly caretSelectPosition: number;
    caretPosition: number;
    selectionAnchorPosition: number;
    selectionFocusPosition: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
