declare namespace UnityEditor.PurchaseResult {
  class Status {
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
    static BasketNotEmpty: UnityEditor.PurchaseResult.Status;
    static ServiceDisabled: UnityEditor.PurchaseResult.Status;
    static AnonymousUser: UnityEditor.PurchaseResult.Status;
    static PasswordMissing: UnityEditor.PurchaseResult.Status;
    static PasswordWrong: UnityEditor.PurchaseResult.Status;
    static PurchaseDeclined: UnityEditor.PurchaseResult.Status;
    static Ok: UnityEditor.PurchaseResult.Status;
  }
}
