declare namespace UnityEngine.UI.ScrollRect {
  class MovementType {
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
    static Unrestricted: UnityEngine.UI.ScrollRect.MovementType;
    static Elastic: UnityEngine.UI.ScrollRect.MovementType;
    static Clamped: UnityEngine.UI.ScrollRect.MovementType;
  }
}
