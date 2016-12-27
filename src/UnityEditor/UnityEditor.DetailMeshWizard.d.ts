declare namespace UnityEditor {
  class DetailMeshWizard extends UnityEditor.TerrainWizard {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    // properties
    // fields
    m_Detail: any;
    m_NoiseSpread: number;
    m_MinWidth: number;
    m_MaxWidth: number;
    m_MinHeight: number;
    m_MaxHeight: number;
    m_HealthyColor: any;
    m_DryColor: any;
    m_RenderMode: UnityEditor.DetailMeshRenderMode;
  }
}
