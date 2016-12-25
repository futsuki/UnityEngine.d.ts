declare namespace UnityEditor.NetworkDetailStats {
  class NetworkStatsSequence {
    // constructors
    constructor();
    // methods
    Add(tick: number, amount: number): any;
    NewProfilerTick(tick: number): any;
    GetFiveTick(tick: number): number;
    GetTenTick(tick: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    MessageTotal: number;
  }
}
