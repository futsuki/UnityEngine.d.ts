declare namespace UnityEngine.EventSystems {
  class BaseInput extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    constructor();
    // methods
    GetMouseButtonDown(button: number): boolean;
    GetMouseButtonUp(button: number): boolean;
    GetMouseButton(button: number): boolean;
    GetTouch(index: number): UnityEngine.Touch;
    GetAxisRaw(axisName: string): number;
    GetButtonDown(buttonName: string): boolean;
    // properties
    readonly compositionString: string;
    imeCompositionMode: UnityEngine.IMECompositionMode;
    compositionCursorPos: UnityEngine.Vector2;
    readonly mousePresent: boolean;
    readonly mousePosition: UnityEngine.Vector2;
    readonly mouseScrollDelta: UnityEngine.Vector2;
    readonly touchSupported: boolean;
    readonly touchCount: number;
    // fields
  }
}
