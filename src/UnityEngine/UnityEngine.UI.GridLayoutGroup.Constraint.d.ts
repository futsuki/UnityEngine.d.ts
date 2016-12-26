declare namespace UnityEngine.UI.GridLayoutGroup {
  class Constraint {
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
    static Flexible: UnityEngine.UI.GridLayoutGroup.Constraint;
    static FixedColumnCount: UnityEngine.UI.GridLayoutGroup.Constraint;
    static FixedRowCount: UnityEngine.UI.GridLayoutGroup.Constraint;
  }
}
