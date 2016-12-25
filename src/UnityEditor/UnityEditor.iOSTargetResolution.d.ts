declare namespace UnityEditor {
  class iOSTargetResolution {
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
    static Native: UnityEditor.iOSTargetResolution;
    static ResolutionAutoPerformance: UnityEditor.iOSTargetResolution;
    static ResolutionAutoQuality: UnityEditor.iOSTargetResolution;
    static Resolution320p: UnityEditor.iOSTargetResolution;
    static Resolution640p: UnityEditor.iOSTargetResolution;
    static Resolution768p: UnityEditor.iOSTargetResolution;
  }
}
