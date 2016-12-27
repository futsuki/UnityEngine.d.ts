declare namespace UnityEditor {
  class AudioImporterInspector extends UnityEditor.AssetImporterInspector {
    // constructors
    constructor();
    // methods
    CurrentPlatformHasAutoTranslatedCompression(): boolean;
    IsHardwareSound(format: any): boolean;
    CurrentSelectionContainsHardwareSounds(): boolean;
    OnEnable(): void;
    OnInspectorGUI(): void;
    // properties
    // fields
    m_ForceToMono: UnityEditor.SerializedProperty;
    m_Normalize: UnityEditor.SerializedProperty;
    m_PreloadAudioData: UnityEditor.SerializedProperty;
    m_LoadInBackground: UnityEditor.SerializedProperty;
    m_OrigSize: UnityEditor.SerializedProperty;
    m_CompSize: UnityEditor.SerializedProperty;
  }
}
