declare namespace UnityEditor {
  class BoneState {
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
    static None: UnityEditor.BoneState;
    static NotFound: UnityEditor.BoneState;
    static Duplicate: UnityEditor.BoneState;
    static InvalidHierarchy: UnityEditor.BoneState;
    static BoneLenghtIsZero: UnityEditor.BoneState;
    static Valid: UnityEditor.BoneState;
  }
}
