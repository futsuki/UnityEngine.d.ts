declare namespace UnityEditor.SceneViewOverlay {
  class WindowDisplayOption {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static MultipleWindowsPerTarget: UnityEditor.SceneViewOverlay.WindowDisplayOption;
    static OneWindowPerTarget: UnityEditor.SceneViewOverlay.WindowDisplayOption;
    static OneWindowPerTitle: UnityEditor.SceneViewOverlay.WindowDisplayOption;
  }
}
