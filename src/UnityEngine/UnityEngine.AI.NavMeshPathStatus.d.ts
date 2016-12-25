declare namespace UnityEngine.AI {
  class NavMeshPathStatus {
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
    static PathComplete: UnityEngine.AI.NavMeshPathStatus;
    static PathPartial: UnityEngine.AI.NavMeshPathStatus;
    static PathInvalid: UnityEngine.AI.NavMeshPathStatus;
  }
}
