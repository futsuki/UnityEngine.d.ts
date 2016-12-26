declare namespace UnityEditor {
  class AssetInspector {
    // constructors
    private constructor();
    // methods
    static Get(): UnityEditor.AssetInspector;
    OnAssetStatusGUI(r: any, id: number, target: any, style: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
