declare namespace UnityEngine {
  class QualityLevel {
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
    static Fastest: UnityEngine.QualityLevel;
    static Fast: UnityEngine.QualityLevel;
    static Simple: UnityEngine.QualityLevel;
    static Good: UnityEngine.QualityLevel;
    static Beautiful: UnityEngine.QualityLevel;
    static Fantastic: UnityEngine.QualityLevel;
  }
}
