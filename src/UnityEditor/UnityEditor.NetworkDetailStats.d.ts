declare namespace UnityEditor {
  class NetworkDetailStats {
    // constructors
    constructor();
    // methods
    static NewProfilerTick(newTime: number): any;
    static SetStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, msgId: number, entryName: string, amount: number): any;
    static IncrementStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, msgId: number, entryName: string, amount: number): any;
    static ResetAll(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
