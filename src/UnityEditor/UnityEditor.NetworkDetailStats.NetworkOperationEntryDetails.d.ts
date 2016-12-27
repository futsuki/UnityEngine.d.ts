declare namespace UnityEditor.NetworkDetailStats {
  class NetworkOperationEntryDetails extends System.Object {
    // constructors
    constructor();
    // methods
    NewProfilerTick(tickId: number): void;
    Clear(): void;
    AddStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, amount: number): void;
    // properties
    // fields
    m_EntryName: string;
    m_IncomingTotal: number;
    m_OutgoingTotal: number;
    m_IncomingSequence: UnityEditor.NetworkDetailStats.NetworkStatsSequence;
    m_OutgoingSequence: UnityEditor.NetworkDetailStats.NetworkStatsSequence;
  }
}
