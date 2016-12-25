declare namespace UnityEditor {
  class PluginImporter {
    // constructors
    constructor();
    // methods
    ClearSettings(): any;
    SetCompatibleWithAnyPlatform(enable: boolean): any;
    GetCompatibleWithAnyPlatform(): boolean;
    SetExcludeFromAnyPlatform(platformName: string, excludedFromAny: boolean): any;
    GetExcludeFromAnyPlatform(platformName: string): boolean;
    SetExcludeFromAnyPlatform(platform: UnityEditor.BuildTarget, excludedFromAny: boolean): any;
    GetExcludeFromAnyPlatform(platform: UnityEditor.BuildTarget): boolean;
    SetExcludeEditorFromAnyPlatform(excludedFromAny: boolean): any;
    GetExcludeEditorFromAnyPlatform(): boolean;
    SetCompatibleWithEditor(enable: boolean): any;
    GetCompatibleWithEditor(): boolean;
    GetIsOverridable(): boolean;
    ShouldIncludeInBuild(): boolean;
    SetCompatibleWithPlatform(platform: UnityEditor.BuildTarget, enable: boolean): any;
    GetCompatibleWithPlatform(platform: UnityEditor.BuildTarget): boolean;
    SetCompatibleWithPlatform(platformName: string, enable: boolean): any;
    GetCompatibleWithPlatform(platformName: string): boolean;
    SetPlatformData(platform: UnityEditor.BuildTarget, key: string, value: string): any;
    GetPlatformData(platform: UnityEditor.BuildTarget, key: string): string;
    SetPlatformData(platformName: string, key: string, value: string): any;
    GetPlatformData(platformName: string, key: string): string;
    SetEditorData(key: string, value: string): any;
    GetEditorData(key: string): string;
    static GetAllImporters(): UnityEditor.PluginImporter[];
    static GetImporters(platformName: string): UnityEditor.PluginImporter[];
    static GetImporters(platform: UnityEditor.BuildTarget): UnityEditor.PluginImporter[];
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly isNativePlugin: boolean;
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
