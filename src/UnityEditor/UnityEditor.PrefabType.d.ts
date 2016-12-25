declare namespace UnityEditor {
  class PrefabType {
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
    static None: UnityEditor.PrefabType;
    static Prefab: UnityEditor.PrefabType;
    static ModelPrefab: UnityEditor.PrefabType;
    static PrefabInstance: UnityEditor.PrefabType;
    static ModelPrefabInstance: UnityEditor.PrefabType;
    static MissingPrefabInstance: UnityEditor.PrefabType;
    static DisconnectedPrefabInstance: UnityEditor.PrefabType;
    static DisconnectedModelPrefabInstance: UnityEditor.PrefabType;
  }
}
