declare namespace UnityEditor {
  class DetailTextureWizard extends UnityEditor.TerrainWizard {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    // properties
    // fields
    m_DetailTexture: any;
    m_MinWidth: number;
    m_MaxWidth: number;
    m_MinHeight: number;
    m_MaxHeight: number;
    m_NoiseSpread: number;
    m_HealthyColor: any;
    m_DryColor: any;
    m_Billboard: boolean;
  }
}
