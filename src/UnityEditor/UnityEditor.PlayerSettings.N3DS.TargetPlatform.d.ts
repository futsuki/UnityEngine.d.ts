declare namespace UnityEditor.PlayerSettings.N3DS {
  class TargetPlatform {
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
    static Nintendo3DS: UnityEditor.PlayerSettings.N3DS.TargetPlatform;
    static NewNintendo3DS: UnityEditor.PlayerSettings.N3DS.TargetPlatform;
  }
}
