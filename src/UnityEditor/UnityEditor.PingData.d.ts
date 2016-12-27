declare namespace UnityEditor {
  class PingData {
    // constructors
    constructor();
    // methods
    HandlePing(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isPinging: boolean;
    // fields
    m_TimeStart: number;
    m_ZoomTime: number;
    m_WaitTime: number;
    m_FadeOutTime: number;
    m_PeakScale: number;
    m_ContentDraw: ((any) => void);
    m_ContentRect: any;
    m_AvailableWidth: number;
    m_PingStyle: any;
  }
}
