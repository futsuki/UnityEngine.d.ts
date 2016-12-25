declare namespace UnityEditor.GameObjectTreeViewGUI {
  class GameObjectColorType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Normal: UnityEditor.GameObjectTreeViewGUI.GameObjectColorType;
    static Prefab: UnityEditor.GameObjectTreeViewGUI.GameObjectColorType;
    static BrokenPrefab: UnityEditor.GameObjectTreeViewGUI.GameObjectColorType;
    static Count: UnityEditor.GameObjectTreeViewGUI.GameObjectColorType;
  }
}
