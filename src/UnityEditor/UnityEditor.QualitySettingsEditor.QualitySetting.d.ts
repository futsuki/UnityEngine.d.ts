declare namespace UnityEditor.QualitySettingsEditor {
  class QualitySetting {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    m_Name: string;
    m_PropertyPath: string;
    m_ExcludedPlatforms: any;
  }
}
