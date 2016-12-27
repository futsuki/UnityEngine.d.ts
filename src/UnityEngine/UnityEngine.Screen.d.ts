declare namespace UnityEngine {
  class Screen extends System.Object {
    // constructors
    constructor();
    // methods
    static SetResolution(width: number, height: number, fullscreen: boolean, preferredRefreshRate: number): void;
    static SetResolution(width: number, height: number, fullscreen: boolean): void;
    // properties
    static readonly resolutions: UnityEngine.Resolution[];
    static lockCursor: boolean;
    static readonly currentResolution: UnityEngine.Resolution;
    static readonly width: number;
    static readonly height: number;
    static readonly dpi: number;
    static fullScreen: boolean;
    static autorotateToPortrait: boolean;
    static autorotateToPortraitUpsideDown: boolean;
    static autorotateToLandscapeLeft: boolean;
    static autorotateToLandscapeRight: boolean;
    static orientation: UnityEngine.ScreenOrientation;
    static sleepTimeout: number;
    static readonly GetResolution: UnityEngine.Resolution[];
    static showCursor: boolean;
    // fields
  }
}
