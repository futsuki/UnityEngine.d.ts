declare namespace UnityEditor {
  class ScreenShots {
    // constructors
    constructor();
    // methods
    static SetMainWindowSize(): any;
    static SetMainWindowSizeSmall(): any;
    static Screenshot(): any;
    static ScreenshotToolbar(): any;
    static ScreenshotExtendedRight(): any;
    static ScreenShotComponent(): any;
    static ScreenShotComponent(contentRect: any, target: any): any;
    static ScreenGameViewContent(): any;
    static ToggleFakeNonDeveloperBuild(): any;
    static SaveScreenShot(r: any, name: string): any;
    static SaveScreenShotWithBorder(r: any, borderColor: any, name: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static kToolbarBorderColor: any;
    static kWindowBorderColor: any;
    static s_TakeComponentScreenshot: boolean;
  }
}
