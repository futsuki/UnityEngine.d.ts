declare namespace UnityEditor {
  class AudioImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    ContainsSampleSettingsOverride(platform: string): boolean;
    GetOverrideSampleSettings(platform: string): UnityEditor.AudioImporterSampleSettings;
    SetOverrideSampleSettings(platform: string, settings: UnityEditor.AudioImporterSampleSettings): boolean;
    ClearSampleSettingOverride(platform: string): boolean;
    // properties
    defaultSampleSettings: UnityEditor.AudioImporterSampleSettings;
    forceToMono: boolean;
    loadInBackground: boolean;
    preloadAudioData: boolean;
    channels: UnityEditor.AudioImporterChannels;
    compressionBitrate: number;
    loopable: boolean;
    hardware: boolean;
    threeD: boolean;
    // fields
  }
}
