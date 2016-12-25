declare namespace UnityEditor.VersionControl {
  class CheckoutMode {
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
    static Asset: UnityEditor.VersionControl.CheckoutMode;
    static Meta: UnityEditor.VersionControl.CheckoutMode;
    static Both: UnityEditor.VersionControl.CheckoutMode;
    static Exact: UnityEditor.VersionControl.CheckoutMode;
  }
}
