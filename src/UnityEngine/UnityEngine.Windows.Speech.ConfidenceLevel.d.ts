declare namespace UnityEngine.Windows.Speech {
  class ConfidenceLevel {
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
    static High: UnityEngine.Windows.Speech.ConfidenceLevel;
    static Medium: UnityEngine.Windows.Speech.ConfidenceLevel;
    static Low: UnityEngine.Windows.Speech.ConfidenceLevel;
    static Rejected: UnityEngine.Windows.Speech.ConfidenceLevel;
  }
}
