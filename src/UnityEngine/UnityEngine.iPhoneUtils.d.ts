declare namespace UnityEngine {
  class iPhoneUtils {
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
