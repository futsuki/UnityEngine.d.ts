declare namespace UnityEditor.PlayerSettings.N3DS {
  class MediaSize {
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
    static _128MB: UnityEditor.PlayerSettings.N3DS.MediaSize;
    static _256MB: UnityEditor.PlayerSettings.N3DS.MediaSize;
    static _512MB: UnityEditor.PlayerSettings.N3DS.MediaSize;
    static _1GB: UnityEditor.PlayerSettings.N3DS.MediaSize;
    static _2GB: UnityEditor.PlayerSettings.N3DS.MediaSize;
  }
}
