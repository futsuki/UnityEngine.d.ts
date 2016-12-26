declare namespace UnityEditorInternal.VersionControl {
  class Overlay {
    // constructors
    constructor();
    // methods
    static GetOverlayRect(itemRect: any): any;
    static DrawOverlay(asset: UnityEditor.VersionControl.Asset, itemRect: any): void;
    static DrawOverlay(asset: UnityEditor.VersionControl.Asset, metaAsset: UnityEditor.VersionControl.Asset, itemRect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
