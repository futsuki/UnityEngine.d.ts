declare namespace UnityEngine {
  class TransitionType {
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
    static Normal: UnityEngine.TransitionType;
    static Entry: UnityEngine.TransitionType;
    static Exit: UnityEngine.TransitionType;
  }
}
