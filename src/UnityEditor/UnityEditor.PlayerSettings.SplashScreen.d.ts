declare namespace UnityEditor.PlayerSettings {
  class SplashScreen {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static animationMode: UnityEditor.PlayerSettings.SplashScreen.AnimationMode;
    static animationBackgroundZoom: number;
    static animationLogoZoom: number;
    static background: any;
    static backgroundPortrait: any;
    static backgroundColor: any;
    static drawMode: UnityEditor.PlayerSettings.SplashScreen.DrawMode;
    static logos: UnityEditor.PlayerSettings.SplashScreenLogo[];
    static overlayOpacity: number;
    static show: boolean;
    static showUnityLogo: boolean;
    static unityLogoStyle: UnityEditor.PlayerSettings.SplashScreen.UnityLogoStyle;
    // fields
  }
}
