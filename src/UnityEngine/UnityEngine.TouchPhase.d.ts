declare namespace UnityEngine {
  class TouchPhase {
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
    static Began: UnityEngine.TouchPhase;
    static Moved: UnityEngine.TouchPhase;
    static Stationary: UnityEngine.TouchPhase;
    static Ended: UnityEngine.TouchPhase;
    static Canceled: UnityEngine.TouchPhase;
  }
}
