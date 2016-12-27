declare namespace UnityEngine.UI {
  class CanvasScaler extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    // properties
    uiScaleMode: UnityEngine.UI.CanvasScaler.ScaleMode;
    referencePixelsPerUnit: number;
    scaleFactor: number;
    referenceResolution: UnityEngine.Vector2;
    screenMatchMode: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
    matchWidthOrHeight: number;
    physicalUnit: UnityEngine.UI.CanvasScaler.Unit;
    fallbackScreenDPI: number;
    defaultSpriteDPI: number;
    dynamicPixelsPerUnit: number;
    // fields
  }
}
