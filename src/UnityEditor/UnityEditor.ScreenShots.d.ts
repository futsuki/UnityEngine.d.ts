declare namespace UnityEditor {
  class ScreenShots {
    // constructors
    constructor();
    // methods
    static SetMainWindowSize(): void;
    static SetMainWindowSizeSmall(): void;
    static Screenshot(): void;
    static ScreenshotToolbar(): void;
    static ScreenshotExtendedRight(): void;
    static ScreenShotComponent(): void;
    static ScreenShotComponent(contentRect: any, target: any): void;
    static ScreenGameViewContent(): void;
    static ToggleFakeNonDeveloperBuild(): void;
    static SaveScreenShot(r: any, name: string): void;
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
