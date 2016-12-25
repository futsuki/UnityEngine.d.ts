declare namespace UnityEditor {
  class CompareInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    left: number;
    right: number;
    convert_binary: number;
    autodetect_binary: number;
  }
}
