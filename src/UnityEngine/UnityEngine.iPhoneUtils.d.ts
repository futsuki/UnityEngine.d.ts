declare namespace UnityEngine {
  class iPhoneUtils {
    // constructors
    constructor();
    // methods
    static PlayMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode, scalingMode: UnityEngine.iPhoneMovieScalingMode): any;
    static PlayMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode): any;
    static PlayMovie(path: string, bgColor: UnityEngine.Color): any;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode, scalingMode: UnityEngine.iPhoneMovieScalingMode): any;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode): any;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color): any;
    static Vibrate(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isApplicationGenuine: boolean;
    static readonly isApplicationGenuineAvailable: boolean;
    // fields
  }
}
