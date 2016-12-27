declare namespace UnityEngine.UI {
  class Mask extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    MaskEnabled(): boolean;
    OnSiblingGraphicEnabledDisabled(): void;
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    GetModifiedMaterial(baseMaterial: UnityEngine.Material): UnityEngine.Material;
    // properties
    readonly rectTransform: UnityEngine.RectTransform;
    showMaskGraphic: boolean;
    readonly graphic: UnityEngine.UI.Graphic;
    // fields
  }
}
