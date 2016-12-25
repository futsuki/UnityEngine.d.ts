declare namespace UnityEngine {
  class Handheld {
    // constructors
    constructor();
    // methods
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.FullScreenMovieControlMode, scalingMode: UnityEngine.FullScreenMovieScalingMode): boolean;
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.FullScreenMovieControlMode): boolean;
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color): boolean;
    static PlayFullScreenMovie(path: string): boolean;
    static Vibrate(): any;
    static SetActivityIndicatorStyle(style: UnityEngine.iOS.ActivityIndicatorStyle): any;
    static SetActivityIndicatorStyle(style: UnityEngine.AndroidActivityIndicatorStyle): any;
    static SetActivityIndicatorStyle(style: UnityEngine.TizenActivityIndicatorStyle): any;
    static GetActivityIndicatorStyle(): number;
    static StartActivityIndicator(): any;
    static StopActivityIndicator(): any;
    static ClearShaderCache(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static use32BitDisplayBuffer: boolean;
    // fields
  }
}
