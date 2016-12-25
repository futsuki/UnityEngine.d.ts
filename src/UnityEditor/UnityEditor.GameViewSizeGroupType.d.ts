declare namespace UnityEditor {
  class GameViewSizeGroupType {
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
    static Standalone: UnityEditor.GameViewSizeGroupType;
    static WebPlayer: UnityEditor.GameViewSizeGroupType;
    static iOS: UnityEditor.GameViewSizeGroupType;
    static Android: UnityEditor.GameViewSizeGroupType;
    static PS3: UnityEditor.GameViewSizeGroupType;
    static WiiU: UnityEditor.GameViewSizeGroupType;
    static Tizen: UnityEditor.GameViewSizeGroupType;
    static WP8: UnityEditor.GameViewSizeGroupType;
    static N3DS: UnityEditor.GameViewSizeGroupType;
  }
}
