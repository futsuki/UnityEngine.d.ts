declare namespace UnityEditor.PlayerSettings.N3DS {
  class Region {
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
    static Japan: UnityEditor.PlayerSettings.N3DS.Region;
    static America: UnityEditor.PlayerSettings.N3DS.Region;
    static Europe: UnityEditor.PlayerSettings.N3DS.Region;
    static China: UnityEditor.PlayerSettings.N3DS.Region;
    static Korea: UnityEditor.PlayerSettings.N3DS.Region;
    static Taiwan: UnityEditor.PlayerSettings.N3DS.Region;
    static All: UnityEditor.PlayerSettings.N3DS.Region;
  }
}
