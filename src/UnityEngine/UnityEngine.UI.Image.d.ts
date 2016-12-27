declare namespace UnityEngine.UI {
  class Image extends UnityEngine.UI.MaskableGraphic {
    // constructors
    protected constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    SetNativeSize(): void;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    IsRaycastLocationValid(screenPoint: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    // properties
    sprite: UnityEngine.Sprite;
    overrideSprite: UnityEngine.Sprite;
    type: UnityEngine.UI.Image.Type;
    preserveAspect: boolean;
    fillCenter: boolean;
    fillMethod: UnityEngine.UI.Image.FillMethod;
    fillAmount: number;
    fillClockwise: boolean;
    fillOrigin: number;
    eventAlphaThreshold: number;
    alphaHitTestMinimumThreshold: number;
    static readonly defaultETC1GraphicMaterial: UnityEngine.Material;
    readonly mainTexture: UnityEngine.Texture;
    readonly hasBorder: boolean;
    readonly pixelsPerUnit: number;
    material: UnityEngine.Material;
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
