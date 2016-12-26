declare namespace UnityEditor {
  class NetworkDetailStats {
    // constructors
    constructor();
    // methods
    static NewProfilerTick(newTime: number): void;
    static SetStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, msgId: number, entryName: string, amount: number): void;
    static IncrementStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, msgId: number, entryName: string, amount: number): void;
    static ResetAll(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
