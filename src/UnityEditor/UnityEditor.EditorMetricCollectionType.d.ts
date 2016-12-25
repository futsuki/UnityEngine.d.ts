declare namespace UnityEditor {
  class EditorMetricCollectionType {
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
    static Bake: UnityEditor.EditorMetricCollectionType;
    static Build: UnityEditor.EditorMetricCollectionType;
    static EditorStartup: UnityEditor.EditorMetricCollectionType;
    static ProjectSnapshot: UnityEditor.EditorMetricCollectionType;
    static SessionInfo: UnityEditor.EditorMetricCollectionType;
    static UnitTest: UnityEditor.EditorMetricCollectionType;
  }
}
