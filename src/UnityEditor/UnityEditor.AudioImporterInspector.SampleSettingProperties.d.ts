declare namespace UnityEditor.AudioImporterInspector {
  class SampleSettingProperties {
    // constructors
    private constructor();
    // methods
    HasModified(): boolean;
    ClearChangedFlags(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
