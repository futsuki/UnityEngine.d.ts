declare namespace UnityEngine.UI {
  class MaskableGraphic extends UnityEngine.UI.Graphic {
    // constructors
    protected constructor();
    // methods
    GetModifiedMaterial(baseMaterial: UnityEngine.Material): UnityEngine.Material;
    Cull(clipRect: UnityEngine.Rect, validRect: boolean): void;
    SetClipRect(clipRect: UnityEngine.Rect, validRect: boolean): void;
    ParentMaskStateChanged(): void;
    RecalculateClipping(): void;
    RecalculateMasking(): void;
    // properties
    onCullStateChanged: UnityEngine.UI.MaskableGraphic.CullStateChangedEvent;
    maskable: boolean;
    // fields
  }
}
