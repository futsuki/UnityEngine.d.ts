declare namespace UnityEditor.PlayerSettings {
  class SplashScreenLogo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(duration: number): UnityEditor.PlayerSettings.SplashScreenLogo;
    static Create(): UnityEditor.PlayerSettings.SplashScreenLogo;
    static Create(duration: number, logo: any): UnityEditor.PlayerSettings.SplashScreenLogo;
    static CreateWithUnityLogo(): UnityEditor.PlayerSettings.SplashScreenLogo;
    static CreateWithUnityLogo(duration: number): UnityEditor.PlayerSettings.SplashScreenLogo;
    // properties
    logo: any;
    static readonly unityLogo: any;
    duration: number;
    // fields
  }
}
