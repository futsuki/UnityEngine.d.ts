declare namespace UnityEditor.GameObjectUtility {
  class ShouldIncludeChildren {
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
    static HasNoChildren: UnityEditor.GameObjectUtility.ShouldIncludeChildren;
    static IncludeChildren: UnityEditor.GameObjectUtility.ShouldIncludeChildren;
    static DontIncludeChildren: UnityEditor.GameObjectUtility.ShouldIncludeChildren;
    static Cancel: UnityEditor.GameObjectUtility.ShouldIncludeChildren;
  }
}
