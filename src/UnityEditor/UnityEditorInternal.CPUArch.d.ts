declare namespace UnityEditorInternal {
  class CPUArch {
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
    static Any: UnityEditorInternal.CPUArch;
    static x86: UnityEditorInternal.CPUArch;
    static ARMv7: UnityEditorInternal.CPUArch;
  }
}
