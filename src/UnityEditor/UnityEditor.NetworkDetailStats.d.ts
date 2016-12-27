declare namespace UnityEditor {
  class NetworkDetailStats extends System.Object {
    // constructors
    constructor();
    // methods
    static NewProfilerTick(newTime: number): void;
    static SetStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, msgId: number, entryName: string, amount: number): void;
    static IncrementStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, msgId: number, entryName: string, amount: number): void;
    static ResetAll(): void;
    // properties
    // fields
  }
}
