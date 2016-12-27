declare namespace UnityEditorInternal {
  class Chart extends System.Object {
    // constructors
    constructor();
    // methods
    LoadAndBindSettings(chartSettingsName: string, cdata: UnityEditorInternal.ChartData): void;
    OnLostFocus(): void;
    DoGUI(type: UnityEditorInternal.Chart.ChartType, selectedFrame: number, cdata: UnityEditorInternal.ChartData, area: UnityEditorInternal.ProfilerArea, active: boolean, icon: any, action: any): number;
    // properties
    // fields
    static kSideWidth: number;
    m_NotSupportedWarning: string;
  }
}
