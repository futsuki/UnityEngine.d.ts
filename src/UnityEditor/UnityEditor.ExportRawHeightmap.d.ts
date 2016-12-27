declare namespace UnityEditor {
  class ExportRawHeightmap extends UnityEditor.TerrainWizard {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    // properties
    // fields
    m_Depth: UnityEditor.ExportRawHeightmap.Depth;
    m_ByteOrder: UnityEditor.ExportRawHeightmap.ByteOrder;
    m_FlipVertically: boolean;
  }
}
