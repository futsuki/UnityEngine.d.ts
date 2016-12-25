declare namespace UnityEditor {
  class AudioImporter {
    // constructors
    constructor();
    // methods
    ContainsSampleSettingsOverride(platform: string): boolean;
    GetOverrideSampleSettings(platform: string): UnityEditor.AudioImporterSampleSettings;
    SetOverrideSampleSettings(platform: string, settings: UnityEditor.AudioImporterSampleSettings): boolean;
    ClearSampleSettingOverride(platform: string): boolean;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
