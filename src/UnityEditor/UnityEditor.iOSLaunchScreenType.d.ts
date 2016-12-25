declare namespace UnityEditor {
  class iOSLaunchScreenType {
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
    static Default: UnityEditor.iOSLaunchScreenType;
    static ImageAndBackgroundRelative: UnityEditor.iOSLaunchScreenType;
    static CustomXib: UnityEditor.iOSLaunchScreenType;
    static None: UnityEditor.iOSLaunchScreenType;
    static ImageAndBackgroundConstant: UnityEditor.iOSLaunchScreenType;
  }
}
