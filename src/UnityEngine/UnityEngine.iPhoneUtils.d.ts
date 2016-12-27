declare namespace UnityEngine {
  class iPhoneUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static PlayMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode, scalingMode: UnityEngine.iPhoneMovieScalingMode): void;
    static PlayMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode): void;
    static PlayMovie(path: string, bgColor: UnityEngine.Color): void;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode, scalingMode: UnityEngine.iPhoneMovieScalingMode): void;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode): void;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color): void;
    static Vibrate(): void;
    // properties
    static readonly isApplicationGenuine: boolean;
    static readonly isApplicationGenuineAvailable: boolean;
    // fields
  }
}
