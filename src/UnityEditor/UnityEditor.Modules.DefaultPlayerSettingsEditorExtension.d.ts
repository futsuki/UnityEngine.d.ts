declare namespace UnityEditor.Modules {
  class DefaultPlayerSettingsEditorExtension {
    // constructors
    private constructor();
    // methods
    OnEnable(settingsEditor: UnityEditor.PlayerSettingsEditor): void;
    HasPublishSection(): boolean;
    PublishSectionGUI(h: number, midWidth: number, maxWidth: number): void;
    HasIdentificationGUI(): boolean;
    IdentificationSectionGUI(): void;
    ConfigurationSectionGUI(): void;
    SupportsOrientation(): boolean;
    CanShowUnitySplashScreen(): boolean;
    SplashSectionGUI(): void;
    UsesStandardIcons(): boolean;
    IconSectionGUI(): void;
    HasResolutionSection(): boolean;
    SupportsStaticBatching(): boolean;
    SupportsDynamicBatching(): boolean;
    ResolutionSectionGUI(h: number, midWidth: number, maxWidth: number): void;
    HasBundleIdentifier(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
