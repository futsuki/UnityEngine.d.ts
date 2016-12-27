declare namespace UnityEditorInternal {
  class ProfilerChart extends System.Object {
    // constructors
    constructor(area: UnityEditorInternal.ProfilerArea, type: UnityEditorInternal.Chart.ChartType, dataScale: number, seriesCount: number);
    // methods
    DoChartGUI(currentFrame: number, currentArea: UnityEditorInternal.ProfilerArea, action: any): number;
    LoadAndBindSettings(): void;
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
