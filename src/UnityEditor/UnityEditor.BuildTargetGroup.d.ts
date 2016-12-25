declare namespace UnityEditor {
  class BuildTargetGroup {
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
    static Unknown: UnityEditor.BuildTargetGroup;
    static Standalone: UnityEditor.BuildTargetGroup;
    static WebPlayer: UnityEditor.BuildTargetGroup;
    static iPhone: UnityEditor.BuildTargetGroup;
    static iOS: UnityEditor.BuildTargetGroup;
    static PS3: UnityEditor.BuildTargetGroup;
    static XBOX360: UnityEditor.BuildTargetGroup;
    static Android: UnityEditor.BuildTargetGroup;
    static WebGL: UnityEditor.BuildTargetGroup;
    static WSA: UnityEditor.BuildTargetGroup;
    static Metro: UnityEditor.BuildTargetGroup;
    static WP8: UnityEditor.BuildTargetGroup;
    static BlackBerry: UnityEditor.BuildTargetGroup;
    static Tizen: UnityEditor.BuildTargetGroup;
    static PSP2: UnityEditor.BuildTargetGroup;
    static PS4: UnityEditor.BuildTargetGroup;
    static PSM: UnityEditor.BuildTargetGroup;
    static XboxOne: UnityEditor.BuildTargetGroup;
    static SamsungTV: UnityEditor.BuildTargetGroup;
    static N3DS: UnityEditor.BuildTargetGroup;
    static WiiU: UnityEditor.BuildTargetGroup;
    static tvOS: UnityEditor.BuildTargetGroup;
  }
}
