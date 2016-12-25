declare namespace UnityEditorInternal {
  class ProfilerChart {
    // constructors
    constructor(area: UnityEditorInternal.ProfilerArea, type: UnityEditorInternal.Chart.ChartType, dataScale: number, seriesCount: number);
    // methods
    DoChartGUI(currentFrame: number, currentArea: UnityEditorInternal.ProfilerArea, action: any): number;
    LoadAndBindSettings(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    active: boolean;
    // fields
    m_Area: UnityEditorInternal.ProfilerArea;
    m_Type: UnityEditorInternal.Chart.ChartType;
    m_DataScale: number;
    m_Chart: UnityEditorInternal.Chart;
    m_Data: UnityEditorInternal.ChartData;
    m_Series: UnityEditorInternal.ChartSeries[];
    m_Icon: any;
  }
}
