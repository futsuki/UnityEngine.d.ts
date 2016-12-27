declare namespace UnityEditor.PlayerSettings {
  class WSA extends System.Object {
    // constructors
    constructor();
    // methods
    static SetCertificate(path: string, password: string): boolean;
    static GetVisualAssetsImage(type: UnityEditor.PlayerSettings.WSAImageType, scale: UnityEditor.PlayerSettings.WSAImageScale): string;
    static SetVisualAssetsImage(image: string, type: UnityEditor.PlayerSettings.WSAImageType, scale: UnityEditor.PlayerSettings.WSAImageScale): void;
    static SetCapability(capability: UnityEditor.PlayerSettings.WSACapability, value: boolean): void;
    static GetCapability(capability: UnityEditor.PlayerSettings.WSACapability): boolean;
    // properties
    static packageName: string;
    static packageLogo: string;
    static packageLogo140: string;
    static packageLogo180: string;
    static packageLogo240: string;
    static commandLineArgsFile: string;
    static readonly certificatePath: string;
    static readonly certificateSubject: string;
    static readonly certificateIssuer: string;
    static applicationDescription: string;
    static storeTileLogo80: string;
    static storeTileLogo: string;
    static storeTileLogo140: string;
    static storeTileLogo180: string;
    static storeTileWideLogo80: string;
    static storeTileWideLogo: string;
    static storeTileWideLogo140: string;
    static storeTileWideLogo180: string;
    static storeTileSmallLogo80: string;
    static storeTileSmallLogo: string;
    static storeTileSmallLogo140: string;
    static storeTileSmallLogo180: string;
    static storeSmallTile80: string;
    static storeSmallTile: string;
    static storeSmallTile140: string;
    static storeSmallTile180: string;
    static storeLargeTile80: string;
    static storeLargeTile: string;
    static storeLargeTile140: string;
    static storeLargeTile180: string;
    static storeSplashScreenImage: string;
    static storeSplashScreenImageScale140: string;
    static storeSplashScreenImageScale180: string;
    static phoneAppIcon: string;
    static phoneAppIcon140: string;
    static phoneAppIcon240: string;
    static phoneSmallTile: string;
    static phoneSmallTile140: string;
    static phoneSmallTile240: string;
    static phoneMediumTile: string;
    static phoneMediumTile140: string;
    static phoneMediumTile240: string;
    static phoneWideTile: string;
    static phoneWideTile140: string;
    static phoneWideTile240: string;
    static phoneSplashScreenImage: string;
    static phoneSplashScreenImageScale140: string;
    static phoneSplashScreenImageScale240: string;
    static tileShortName: string;
    static tileShowName: UnityEditor.PlayerSettings.WSAApplicationShowName;
    static mediumTileShowName: boolean;
    static largeTileShowName: boolean;
    static wideTileShowName: boolean;
    static defaultTileSize: UnityEditor.PlayerSettings.WSADefaultTileSize;
    static compilationOverrides: UnityEditor.PlayerSettings.WSACompilationOverrides;
    static tileForegroundText: UnityEditor.PlayerSettings.WSAApplicationForegroundText;
    static tileBackgroundColor: any;
    static enableIndependentInputSource: boolean;
    static inputSource: UnityEditor.PlayerSettings.WSAInputSource;
    static enableLowLatencyPresentationAPI: boolean;
    static packageVersion: any;
    static readonly certificateNotAfter: any;
    static splashScreenBackgroundColor: any;
    // fields
  }
}
