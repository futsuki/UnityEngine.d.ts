declare namespace UnityEditor.PopupLocationHelper {
  class PopupLocation {
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
    static Below: UnityEditor.PopupLocationHelper.PopupLocation;
    static Above: UnityEditor.PopupLocationHelper.PopupLocation;
    static Left: UnityEditor.PopupLocationHelper.PopupLocation;
    static Right: UnityEditor.PopupLocationHelper.PopupLocation;
  }
}
