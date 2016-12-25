declare namespace UnityEditor {
  class UIOrientation {
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
    static Portrait: UnityEditor.UIOrientation;
    static PortraitUpsideDown: UnityEditor.UIOrientation;
    static LandscapeRight: UnityEditor.UIOrientation;
    static LandscapeLeft: UnityEditor.UIOrientation;
    static AutoRotation: UnityEditor.UIOrientation;
  }
}
