declare namespace UnityEngine.Analytics {
  class Analytics {
    // constructors
    private constructor();
    // methods
    static FlushEvents(): UnityEngine.Analytics.AnalyticsResult;
    static SetUserId(userId: string): UnityEngine.Analytics.AnalyticsResult;
    static SetUserGender(gender: UnityEngine.Analytics.Gender): UnityEngine.Analytics.AnalyticsResult;
    static SetUserBirthYear(birthYear: number): UnityEngine.Analytics.AnalyticsResult;
    static Transaction(productId: string, amount: number, currency: string): UnityEngine.Analytics.AnalyticsResult;
    static Transaction(productId: string, amount: number, currency: string, receiptPurchaseData: string, signature: string): UnityEngine.Analytics.AnalyticsResult;
    static CustomEvent(customEventName: string): UnityEngine.Analytics.AnalyticsResult;
    static CustomEvent(customEventName: string, position: UnityEngine.Vector3): UnityEngine.Analytics.AnalyticsResult;
    static CustomEvent(customEventName: string, eventData: any): UnityEngine.Analytics.AnalyticsResult;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
