declare namespace UnityEditor {
  class MobileTextureSubtarget {
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
    static Generic: UnityEditor.MobileTextureSubtarget;
    static DXT: UnityEditor.MobileTextureSubtarget;
    static PVRTC: UnityEditor.MobileTextureSubtarget;
    static ATC: UnityEditor.MobileTextureSubtarget;
    static ETC: UnityEditor.MobileTextureSubtarget;
    static ETC2: UnityEditor.MobileTextureSubtarget;
    static ASTC: UnityEditor.MobileTextureSubtarget;
  }
}
