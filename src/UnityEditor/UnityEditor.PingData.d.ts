declare namespace UnityEditor {
  class PingData extends System.Object {
    // constructors
    constructor();
    // methods
    HandlePing(): void;
    // properties
    readonly isPinging: boolean;
    // fields
    m_TimeStart: number;
    m_ZoomTime: number;
    m_WaitTime: number;
    m_FadeOutTime: number;
    m_PeakScale: number;
    m_ContentDraw: ((obj: any) => void);
    m_ContentRect: any;
    m_AvailableWidth: number;
    m_PingStyle: any;
  }
}
