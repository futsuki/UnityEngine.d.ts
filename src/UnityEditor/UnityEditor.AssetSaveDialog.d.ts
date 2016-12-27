declare namespace UnityEditor {
  class AssetSaveDialog extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static ShowWindow(inAssets: string[], assetsThatShouldBeSaved: any): void;
    static GetContentForAsset(path: string): any;
    // properties
    // fields
  }
}
