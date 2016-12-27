declare namespace UnityEditor {
  class PluginImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    ClearSettings(): void;
    SetCompatibleWithAnyPlatform(enable: boolean): void;
    GetCompatibleWithAnyPlatform(): boolean;
    SetExcludeFromAnyPlatform(platformName: string, excludedFromAny: boolean): void;
    SetExcludeFromAnyPlatform(platform: UnityEditor.BuildTarget, excludedFromAny: boolean): void;
    GetExcludeFromAnyPlatform(platformName: string): boolean;
    GetExcludeFromAnyPlatform(platform: UnityEditor.BuildTarget): boolean;
    SetExcludeEditorFromAnyPlatform(excludedFromAny: boolean): void;
    GetExcludeEditorFromAnyPlatform(): boolean;
    SetCompatibleWithEditor(enable: boolean): void;
    GetCompatibleWithEditor(): boolean;
    GetIsOverridable(): boolean;
    ShouldIncludeInBuild(): boolean;
    SetCompatibleWithPlatform(platform: UnityEditor.BuildTarget, enable: boolean): void;
    SetCompatibleWithPlatform(platformName: string, enable: boolean): void;
    GetCompatibleWithPlatform(platform: UnityEditor.BuildTarget): boolean;
    GetCompatibleWithPlatform(platformName: string): boolean;
    SetPlatformData(platform: UnityEditor.BuildTarget, key: string, value: string): void;
    SetPlatformData(platformName: string, key: string, value: string): void;
    GetPlatformData(platform: UnityEditor.BuildTarget, key: string): string;
    GetPlatformData(platformName: string, key: string): string;
    SetEditorData(key: string, value: string): void;
    GetEditorData(key: string): string;
    static GetAllImporters(): UnityEditor.PluginImporter[];
    static GetImporters(platformName: string): UnityEditor.PluginImporter[];
    static GetImporters(platform: UnityEditor.BuildTarget): UnityEditor.PluginImporter[];
    // properties
    readonly isNativePlugin: boolean;
    // fields
  }
}
