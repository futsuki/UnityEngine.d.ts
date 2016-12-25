declare namespace UnityEditor.MemoryElementDataManager {
  class ObjectTypeFilter {
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
    static Scene: UnityEditor.MemoryElementDataManager.ObjectTypeFilter;
    static Asset: UnityEditor.MemoryElementDataManager.ObjectTypeFilter;
    static BuiltinResource: UnityEditor.MemoryElementDataManager.ObjectTypeFilter;
    static DontSave: UnityEditor.MemoryElementDataManager.ObjectTypeFilter;
    static Other: UnityEditor.MemoryElementDataManager.ObjectTypeFilter;
  }
}
