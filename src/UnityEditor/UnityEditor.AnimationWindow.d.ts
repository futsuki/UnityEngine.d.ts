declare namespace UnityEditor {
  class AnimationWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static GetAllAnimationWindows(): UnityEditor.AnimationWindow[];
    ForceRefresh(): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    Update(): void;
    OnGUI(): void;
    OnSelectionChange(): void;
    OnFocus(): void;
    OnControllerChange(): void;
    OnLostFocus(): void;
    EditGameObject(gameObject: any): void;
    EditAnimationClip(animationClip: any, sourceObject: UnityEngine.Object): void;
    // properties
    // fields
  }
}
