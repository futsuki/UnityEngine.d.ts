declare namespace UnityEditor {
  class AndroidTargetDevice {
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
    static FAT: UnityEditor.AndroidTargetDevice;
    static ARMv7: UnityEditor.AndroidTargetDevice;
    static x86: UnityEditor.AndroidTargetDevice;
  }
}
