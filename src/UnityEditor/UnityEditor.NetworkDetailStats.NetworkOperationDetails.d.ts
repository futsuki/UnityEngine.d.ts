declare namespace UnityEditor.NetworkDetailStats {
  class NetworkOperationDetails extends System.Object {
    // constructors
    constructor();
    // methods
    NewProfilerTick(tickId: number): void;
    Clear(): void;
    SetStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, entryName: string, amount: number): void;
    IncrementStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, entryName: string, amount: number): void;
    // properties
    // fields
    MsgId: number;
    totalIn: number;
    totalOut: number;
    m_Entries: any;
  }
}
