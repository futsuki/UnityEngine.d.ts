declare namespace UnityEditor {
  class ExternalVersionControl {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    static Disabled: string;
    static AutoDetect: string;
    static Generic: string;
    static AssetServer: string;
  }
}
