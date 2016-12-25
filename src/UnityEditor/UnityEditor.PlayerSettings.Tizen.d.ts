declare namespace UnityEditor.PlayerSettings {
  class Tizen {
    // constructors
    constructor();
    // methods
    static SetCapability(capability: UnityEditor.PlayerSettings.TizenCapability, value: boolean): any;
    static GetCapability(capability: UnityEditor.PlayerSettings.TizenCapability): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static productDescription: string;
    static productURL: string;
    static signingProfileName: string;
    static deploymentTarget: string;
    static deploymentTargetType: number;
    static minOSVersion: UnityEditor.TizenOSVersion;
    static showActivityIndicatorOnLoading: UnityEditor.TizenShowActivityIndicatorOnLoading;
    // fields
  }
}
