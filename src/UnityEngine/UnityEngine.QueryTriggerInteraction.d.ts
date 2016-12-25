declare namespace UnityEngine {
  class QueryTriggerInteraction {
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
    static UseGlobal: UnityEngine.QueryTriggerInteraction;
    static Ignore: UnityEngine.QueryTriggerInteraction;
    static Collide: UnityEngine.QueryTriggerInteraction;
  }
}
