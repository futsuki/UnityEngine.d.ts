declare namespace UnityEditor {
  class PluginImporter {
    // constructors
    constructor();
    // methods
    ClearSettings(): void;
    SetCompatibleWithAnyPlatform(enable: boolean): void;
    GetCompatibleWithAnyPlatform(): boolean;
    SetExcludeFromAnyPlatform(platformName: string, excludedFromAny: boolean): void;
    GetExcludeFromAnyPlatform(platformName: string): boolean;
    SetExcludeFromAnyPlatform(platform: UnityEditor.BuildTarget, excludedFromAny: boolean): void;
    GetExcludeFromAnyPlatform(platform: UnityEditor.BuildTarget): boolean;
    SetExcludeEditorFromAnyPlatform(excludedFromAny: boolean): void;
    GetExcludeEditorFromAnyPlatform(): boolean;
    SetCompatibleWithEditor(enable: boolean): void;
    GetCompatibleWithEditor(): boolean;
    GetIsOverridable(): boolean;
    ShouldIncludeInBuild(): boolean;
    SetCompatibleWithPlatform(platform: UnityEditor.BuildTarget, enable: boolean): void;
    GetCompatibleWithPlatform(platform: UnityEditor.BuildTarget): boolean;
    SetCompatibleWithPlatform(platformName: string, enable: boolean): void;
    GetCompatibleWithPlatform(platformName: string): boolean;
    SetPlatformData(platform: UnityEditor.BuildTarget, key: string, value: string): void;
    GetPlatformData(platform: UnityEditor.BuildTarget, key: string): string;
    SetPlatformData(platformName: string, key: string, value: string): void;
    GetPlatformData(platformName: string, key: string): string;
    SetEditorData(key: string, value: string): void;
    GetEditorData(key: string): string;
    static GetAllImporters(): UnityEditor.PluginImporter[];
    static GetImporters(platformName: string): UnityEditor.PluginImporter[];
    static GetImporters(platform: UnityEditor.BuildTarget): UnityEditor.PluginImporter[];
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): void;
    SaveAndReimport(): void;
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
