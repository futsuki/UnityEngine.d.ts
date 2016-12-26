declare namespace UnityEditor {
  class BaseHierarchySort {
    // constructors
    private constructor();
    // methods
    Compare(lhs: any, rhs: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly content: any;
    // fields
  }
}
