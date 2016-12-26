declare namespace UnityEngine {
  class Handheld {
    // constructors
    constructor();
    // methods
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.FullScreenMovieControlMode, scalingMode: UnityEngine.FullScreenMovieScalingMode): boolean;
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.FullScreenMovieControlMode): boolean;
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color): boolean;
    static PlayFullScreenMovie(path: string): boolean;
    static Vibrate(): void;
    static SetActivityIndicatorStyle(style: UnityEngine.iOS.ActivityIndicatorStyle): void;
    static SetActivityIndicatorStyle(style: UnityEngine.AndroidActivityIndicatorStyle): void;
    static SetActivityIndicatorStyle(style: UnityEngine.TizenActivityIndicatorStyle): void;
    static GetActivityIndicatorStyle(): number;
    static StartActivityIndicator(): void;
    static StopActivityIndicator(): void;
    static ClearShaderCache(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static use32BitDisplayBuffer: boolean;
    // fields
  }
}
