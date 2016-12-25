declare namespace UnityEditorInternal {
  class DllType {
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
    static Unknown: UnityEditorInternal.DllType;
    static Native: UnityEditorInternal.DllType;
    static UnknownManaged: UnityEditorInternal.DllType;
    static ManagedNET35: UnityEditorInternal.DllType;
    static ManagedNET40: UnityEditorInternal.DllType;
    static WinMDNative: UnityEditorInternal.DllType;
    static WinMDNET40: UnityEditorInternal.DllType;
  }
}
