declare namespace UnityEditor.AudioImporterInspector {
  class SampleSettingProperties extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    HasModified(): boolean;
    ClearChangedFlags(): void;
    // properties
    // fields
    settings: UnityEditor.AudioImporterSampleSettings;
    forcedOverrideState: boolean;
    overrideIsForced: boolean;
    loadTypeChanged: boolean;
    sampleRateSettingChanged: boolean;
    sampleRateOverrideChanged: boolean;
    compressionFormatChanged: boolean;
    qualityChanged: boolean;
    conversionModeChanged: boolean;
  }
}
