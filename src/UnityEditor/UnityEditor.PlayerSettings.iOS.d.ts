declare namespace UnityEditor.PlayerSettings {
  class iOS {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static applicationDisplayName: string;
    static buildNumber: string;
    static scriptCallOptimization: UnityEditor.ScriptCallOptimizationLevel;
    static sdkVersion: UnityEditor.iOSSdkVersion;
    static targetOSVersion: UnityEditor.iOSTargetOSVersion;
    static targetOSVersionString: string;
    static targetDevice: UnityEditor.iOSTargetDevice;
    static prerenderedIcon: boolean;
    static requiresPersistentWiFi: boolean;
    static requiresFullScreen: boolean;
    static statusBarStyle: UnityEditor.iOSStatusBarStyle;
    static appInBackgroundBehavior: UnityEditor.iOSAppInBackgroundBehavior;
    static backgroundModes: UnityEditor.iOSBackgroundMode;
    static forceHardShadowsOnMetal: boolean;
    static allowHTTPDownload: boolean;
    static appleDeveloperTeamID: string;
    static cameraUsageDescription: string;
    static locationUsageDescription: string;
    static microphoneUsageDescription: string;
    static showActivityIndicatorOnLoading: UnityEditor.iOSShowActivityIndicatorOnLoading;
    static useOnDemandResources: boolean;
    static exitOnSuspend: boolean;
    static targetResolution: UnityEditor.iOSTargetResolution;
    static overrideIPodMusic: boolean;
    // fields
  }
}
