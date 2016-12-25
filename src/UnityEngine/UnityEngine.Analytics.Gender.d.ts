declare namespace UnityEngine.Analytics {
  class Gender {
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
    static Male: UnityEngine.Analytics.Gender;
    static Female: UnityEngine.Analytics.Gender;
    static Unknown: UnityEngine.Analytics.Gender;
  }
}
