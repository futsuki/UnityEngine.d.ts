declare namespace UnityEngine {
  class GUIElement extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    HitTest(screenPosition: UnityEngine.Vector3, camera: UnityEngine.Camera): boolean;
    HitTest(screenPosition: UnityEngine.Vector3): boolean;
    GetScreenRect(camera: UnityEngine.Camera): UnityEngine.Rect;
    GetScreenRect(): UnityEngine.Rect;
    // properties
    // fields
  }
}
