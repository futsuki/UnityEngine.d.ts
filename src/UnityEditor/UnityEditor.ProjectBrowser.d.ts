declare namespace UnityEditor {
  class ProjectBrowser {
    // constructors
    private constructor();
    // methods
    static GetAllProjectBrowsers(): any;
    static ShowAssetStoreHitsWhileSearchingLocalAssetsChanged(): void;
    // properties
    // fields
    static s_LastInteractedProjectBrowser: UnityEditor.ProjectBrowser;
  }
}
