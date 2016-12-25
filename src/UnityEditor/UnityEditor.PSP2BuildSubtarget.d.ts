declare namespace UnityEditor {
  class PSP2BuildSubtarget {
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
    static PCHosted: UnityEditor.PSP2BuildSubtarget;
    static Package: UnityEditor.PSP2BuildSubtarget;
  }
}
