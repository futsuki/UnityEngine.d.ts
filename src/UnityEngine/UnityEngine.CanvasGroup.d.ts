declare namespace UnityEngine {
  class CanvasGroup extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    // properties
    alpha: number;
    interactable: boolean;
    blocksRaycasts: boolean;
    ignoreParentGroups: boolean;
    // fields
  }
}
