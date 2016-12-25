declare namespace UnityEditor {
  class AndroidBuildSubtarget {
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
    static Generic: UnityEditor.AndroidBuildSubtarget;
    static DXT: UnityEditor.AndroidBuildSubtarget;
    static PVRTC: UnityEditor.AndroidBuildSubtarget;
    static ATC: UnityEditor.AndroidBuildSubtarget;
    static ETC: UnityEditor.AndroidBuildSubtarget;
    static ETC2: UnityEditor.AndroidBuildSubtarget;
    static ASTC: UnityEditor.AndroidBuildSubtarget;
  }
}
