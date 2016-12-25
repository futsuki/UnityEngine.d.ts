declare namespace UnityEditor.PlayerSettings {
  class Android {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static disableDepthAndStencilBuffers: boolean;
    static use24BitDepthBuffer: boolean;
    static bundleVersionCode: number;
    static minSdkVersion: UnityEditor.AndroidSdkVersions;
    static preferredInstallLocation: UnityEditor.AndroidPreferredInstallLocation;
    static forceInternetPermission: boolean;
    static forceSDCardPermission: boolean;
    static androidTVCompatibility: boolean;
    static androidIsGame: boolean;
    static targetDevice: UnityEditor.AndroidTargetDevice;
    static splashScreenScale: UnityEditor.AndroidSplashScreenScale;
    static keystoreName: string;
    static keystorePass: string;
    static keyaliasName: string;
    static keyaliasPass: string;
    static readonly licenseVerification: boolean;
    static useAPKExpansionFiles: boolean;
    static showActivityIndicatorOnLoading: UnityEditor.AndroidShowActivityIndicatorOnLoading;
    // fields
  }
}