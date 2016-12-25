declare namespace UnityEngine.Analytics {
  class UnityAnalyticsHandler {
    // constructors
    constructor();
    // methods
    Dispose(): any;
    FlushEvents(): UnityEngine.Analytics.AnalyticsResult;
    SetUserId(userId: string): UnityEngine.Analytics.AnalyticsResult;
    SetUserGender(gender: UnityEngine.Analytics.Gender): UnityEngine.Analytics.AnalyticsResult;
    SetUserBirthYear(birthYear: number): UnityEngine.Analytics.AnalyticsResult;
    Transaction(productId: string, amount: number, currency: string): UnityEngine.Analytics.AnalyticsResult;
    Transaction(productId: string, amount: number, currency: string, receiptPurchaseData: string, signature: string): UnityEngine.Analytics.AnalyticsResult;
    CustomEvent(customEventName: string): UnityEngine.Analytics.AnalyticsResult;
    CustomEvent(eventData: UnityEngine.Analytics.CustomEventData): UnityEngine.Analytics.AnalyticsResult;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
