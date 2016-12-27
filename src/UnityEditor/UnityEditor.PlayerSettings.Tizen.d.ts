declare namespace UnityEditor.PlayerSettings {
  class Tizen extends System.Object {
    // constructors
    constructor();
    // methods
    static SetCapability(capability: UnityEditor.PlayerSettings.TizenCapability, value: boolean): void;
    static GetCapability(capability: UnityEditor.PlayerSettings.TizenCapability): boolean;
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
