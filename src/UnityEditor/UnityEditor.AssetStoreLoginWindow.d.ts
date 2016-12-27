declare namespace UnityEditor {
  class AssetStoreLoginWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static Login(loginReason: string, callback: ((errorMessage: string) => void)): void;
    static Logout(): void;
    static ShowAssetStoreLoginWindow(loginReason: string, callback: ((errorMessage: string) => void)): void;
    OnDisable(): void;
    OnGUI(): void;
    // properties
    static readonly IsLoggedIn: boolean;
    // fields
  }
}
