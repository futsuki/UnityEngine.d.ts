declare namespace UnityEditor {
  class UnwrapParam {
    // constructors
    private constructor();
    // methods
    static SetDefaults(param: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    angleError: number;
    areaError: number;
    hardAngle: number;
    packMargin: number;
  }
}
