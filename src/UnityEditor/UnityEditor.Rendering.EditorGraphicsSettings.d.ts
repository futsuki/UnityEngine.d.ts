declare namespace UnityEditor.Rendering {
  class EditorGraphicsSettings {
    // constructors
    constructor();
    // methods
    static GetTierSettings(target: UnityEditor.BuildTargetGroup, tier: any): UnityEditor.Rendering.TierSettings;
    static SetTierSettings(target: UnityEditor.BuildTargetGroup, tier: any, settings: UnityEditor.Rendering.TierSettings): void;
    static GetShaderSettingsForPlatform(target: UnityEditor.BuildTargetGroup, tier: any): UnityEditor.Rendering.PlatformShaderSettings;
    static SetShaderSettingsForPlatform(target: UnityEditor.BuildTargetGroup, tier: any, settings: UnityEditor.Rendering.PlatformShaderSettings): void;
    static GetTierSettings(target: UnityEditor.BuildTargetGroup, tier: any): UnityEditor.Rendering.TierSettings;
    static SetTierSettings(target: UnityEditor.BuildTargetGroup, tier: any, settings: UnityEditor.Rendering.TierSettings): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
