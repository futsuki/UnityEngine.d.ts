declare namespace UnityEditorInternal {
  class RegistryUtil {
    // constructors
    constructor();
    // methods
    static GetRegistryUInt32Value32(subKey: string, valueName: string, defaultValue: number): number;
    static GetRegistryStringValue32(subKey: string, valueName: string, defaultValue: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
