declare namespace UnityEngine.Analytics {
  class AnalyticsResult {
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
    static Ok: UnityEngine.Analytics.AnalyticsResult;
    static NotInitialized: UnityEngine.Analytics.AnalyticsResult;
    static AnalyticsDisabled: UnityEngine.Analytics.AnalyticsResult;
    static TooManyItems: UnityEngine.Analytics.AnalyticsResult;
    static SizeLimitReached: UnityEngine.Analytics.AnalyticsResult;
    static TooManyRequests: UnityEngine.Analytics.AnalyticsResult;
    static InvalidData: UnityEngine.Analytics.AnalyticsResult;
    static UnsupportedPlatform: UnityEngine.Analytics.AnalyticsResult;
  }
}
