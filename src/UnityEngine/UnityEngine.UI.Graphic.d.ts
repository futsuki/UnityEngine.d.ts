declare namespace UnityEngine.UI {
  class Graphic extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    SetAllDirty(): void;
    SetLayoutDirty(): void;
    SetVerticesDirty(): void;
    SetMaterialDirty(): void;
    Rebuild(update: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnRebuildRequested(): void;
    SetNativeSize(): void;
    Raycast(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    PixelAdjustPoint(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetPixelAdjustedRect(): UnityEngine.Rect;
    CrossFadeColor(targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean): void;
    CrossFadeColor(targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean): void;
    CrossFadeAlpha(alpha: number, duration: number, ignoreTimeScale: boolean): void;
    RegisterDirtyLayoutCallback(action: (() => void)): void;
    UnregisterDirtyLayoutCallback(action: (() => void)): void;
    RegisterDirtyVerticesCallback(action: (() => void)): void;
    UnregisterDirtyVerticesCallback(action: (() => void)): void;
    RegisterDirtyMaterialCallback(action: (() => void)): void;
    UnregisterDirtyMaterialCallback(action: (() => void)): void;
    // properties
    static readonly defaultGraphicMaterial: UnityEngine.Material;
    color: UnityEngine.Color;
    raycastTarget: boolean;
    readonly depth: number;
    readonly rectTransform: UnityEngine.RectTransform;
    readonly canvas: UnityEngine.Canvas;
    readonly canvasRenderer: UnityEngine.CanvasRenderer;
    readonly defaultMaterial: UnityEngine.Material;
    material: UnityEngine.Material;
    readonly materialForRendering: UnityEngine.Material;
    readonly mainTexture: UnityEngine.Texture;
    // fields
  }
}
