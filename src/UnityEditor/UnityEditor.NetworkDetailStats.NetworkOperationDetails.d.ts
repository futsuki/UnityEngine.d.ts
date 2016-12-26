declare namespace UnityEditor.NetworkDetailStats {
  class NetworkOperationDetails {
    // constructors
    constructor();
    // methods
    NewProfilerTick(tickId: number): void;
    Clear(): void;
    SetStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, entryName: string, amount: number): void;
    IncrementStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, entryName: string, amount: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    MsgId: number;
    totalIn: number;
    totalOut: number;
    m_Entries: any;
  }
}
