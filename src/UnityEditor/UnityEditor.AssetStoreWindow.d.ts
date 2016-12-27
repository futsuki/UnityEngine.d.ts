declare namespace UnityEditor {
  class AssetStoreWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static OpenURL(url: string): void;
    static Init(): UnityEditor.AssetStoreWindow;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    Logout(): void;
    Reload(): void;
    OnLoadError(url: string): void;
    OnInitScripting(): void;
    OnOpenExternalLink(url: string): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): void;
    OnGUI(): void;
    UpdateDockStatusIfNeeded(): void;
    ToggleMaximize(): void;
    Refresh(): void;
    OnFocus(): void;
    OnLostFocus(): void;
    OnBecameInvisible(): void;
    OnDestroy(): void;
    // properties
    readonly initialized: boolean;
    // fields
  }
}
