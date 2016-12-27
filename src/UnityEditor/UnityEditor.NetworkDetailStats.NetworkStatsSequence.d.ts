declare namespace UnityEditor.NetworkDetailStats {
  class NetworkStatsSequence extends System.Object {
    // constructors
    constructor();
    // methods
    Add(tick: number, amount: number): void;
    NewProfilerTick(tick: number): void;
    GetFiveTick(tick: number): number;
    GetTenTick(tick: number): number;
    // properties
    // fields
    MessageTotal: number;
  }
}
