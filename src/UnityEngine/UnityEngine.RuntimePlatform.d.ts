declare namespace UnityEngine {
  class RuntimePlatform {
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
    static OSXEditor: UnityEngine.RuntimePlatform;
    static OSXPlayer: UnityEngine.RuntimePlatform;
    static WindowsPlayer: UnityEngine.RuntimePlatform;
    static OSXWebPlayer: UnityEngine.RuntimePlatform;
    static OSXDashboardPlayer: UnityEngine.RuntimePlatform;
    static WindowsWebPlayer: UnityEngine.RuntimePlatform;
    static WindowsEditor: UnityEngine.RuntimePlatform;
    static IPhonePlayer: UnityEngine.RuntimePlatform;
    static XBOX360: UnityEngine.RuntimePlatform;
    static PS3: UnityEngine.RuntimePlatform;
    static Android: UnityEngine.RuntimePlatform;
    static NaCl: UnityEngine.RuntimePlatform;
    static FlashPlayer: UnityEngine.RuntimePlatform;
    static LinuxPlayer: UnityEngine.RuntimePlatform;
    static LinuxEditor: UnityEngine.RuntimePlatform;
    static WebGLPlayer: UnityEngine.RuntimePlatform;
    static MetroPlayerX86: UnityEngine.RuntimePlatform;
    static WSAPlayerX86: UnityEngine.RuntimePlatform;
    static MetroPlayerX64: UnityEngine.RuntimePlatform;
    static WSAPlayerX64: UnityEngine.RuntimePlatform;
    static MetroPlayerARM: UnityEngine.RuntimePlatform;
    static WSAPlayerARM: UnityEngine.RuntimePlatform;
    static WP8Player: UnityEngine.RuntimePlatform;
    static BB10Player: UnityEngine.RuntimePlatform;
    static BlackBerryPlayer: UnityEngine.RuntimePlatform;
    static TizenPlayer: UnityEngine.RuntimePlatform;
    static PSP2: UnityEngine.RuntimePlatform;
    static PS4: UnityEngine.RuntimePlatform;
    static PSM: UnityEngine.RuntimePlatform;
    static XboxOne: UnityEngine.RuntimePlatform;
    static SamsungTVPlayer: UnityEngine.RuntimePlatform;
    static WiiU: UnityEngine.RuntimePlatform;
    static tvOS: UnityEngine.RuntimePlatform;
  }
}
