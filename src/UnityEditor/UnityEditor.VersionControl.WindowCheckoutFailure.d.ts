declare namespace UnityEditor.VersionControl {
  class WindowCheckoutFailure extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    static OpenIfCheckoutFailed(assets: UnityEditor.VersionControl.AssetList): void;
    OnGUI(): void;
    // properties
    // fields
  }
}
