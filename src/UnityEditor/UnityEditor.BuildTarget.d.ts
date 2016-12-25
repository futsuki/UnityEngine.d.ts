declare namespace UnityEditor {
  class BuildTarget {
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
    static StandaloneOSXUniversal: UnityEditor.BuildTarget;
    static StandaloneOSXIntel: UnityEditor.BuildTarget;
    static StandaloneWindows: UnityEditor.BuildTarget;
    static WebPlayer: UnityEditor.BuildTarget;
    static WebPlayerStreamed: UnityEditor.BuildTarget;
    static iOS: UnityEditor.BuildTarget;
    static PS3: UnityEditor.BuildTarget;
    static XBOX360: UnityEditor.BuildTarget;
    static Android: UnityEditor.BuildTarget;
    static StandaloneLinux: UnityEditor.BuildTarget;
    static StandaloneWindows64: UnityEditor.BuildTarget;
    static WebGL: UnityEditor.BuildTarget;
    static WSAPlayer: UnityEditor.BuildTarget;
    static StandaloneLinux64: UnityEditor.BuildTarget;
    static StandaloneLinuxUniversal: UnityEditor.BuildTarget;
    static WP8Player: UnityEditor.BuildTarget;
    static StandaloneOSXIntel64: UnityEditor.BuildTarget;
    static BlackBerry: UnityEditor.BuildTarget;
    static Tizen: UnityEditor.BuildTarget;
    static PSP2: UnityEditor.BuildTarget;
    static PS4: UnityEditor.BuildTarget;
    static PSM: UnityEditor.BuildTarget;
    static XboxOne: UnityEditor.BuildTarget;
    static SamsungTV: UnityEditor.BuildTarget;
    static N3DS: UnityEditor.BuildTarget;
    static WiiU: UnityEditor.BuildTarget;
    static tvOS: UnityEditor.BuildTarget;
    static iPhone: UnityEditor.BuildTarget;
    static BB10: UnityEditor.BuildTarget;
    static MetroPlayer: UnityEditor.BuildTarget;
    static NoTarget: UnityEditor.BuildTarget;
  }
}
