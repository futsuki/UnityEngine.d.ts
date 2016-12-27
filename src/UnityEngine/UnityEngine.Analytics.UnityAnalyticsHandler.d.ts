declare namespace UnityEngine.Analytics {
  class UnityAnalyticsHandler extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    FlushEvents(): UnityEngine.Analytics.AnalyticsResult;
    SetUserId(userId: string): UnityEngine.Analytics.AnalyticsResult;
    SetUserGender(gender: UnityEngine.Analytics.Gender): UnityEngine.Analytics.AnalyticsResult;
    SetUserBirthYear(birthYear: number): UnityEngine.Analytics.AnalyticsResult;
    Transaction(productId: string, amount: number, currency: string): UnityEngine.Analytics.AnalyticsResult;
    Transaction(productId: string, amount: number, currency: string, receiptPurchaseData: string, signature: string): UnityEngine.Analytics.AnalyticsResult;
    CustomEvent(customEventName: string): UnityEngine.Analytics.AnalyticsResult;
    CustomEvent(eventData: UnityEngine.Analytics.CustomEventData): UnityEngine.Analytics.AnalyticsResult;
    // properties
    // fields
  }
}
