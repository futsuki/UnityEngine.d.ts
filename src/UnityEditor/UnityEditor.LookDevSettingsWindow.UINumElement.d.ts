declare namespace UnityEditor.LookDevSettingsWindow {
  class UINumElement {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static UINumDrawHeader: UnityEditor.LookDevSettingsWindow.UINumElement;
    static UINumToggle: UnityEditor.LookDevSettingsWindow.UINumElement;
    static UINumSlider: UnityEditor.LookDevSettingsWindow.UINumElement;
    static UINumSeparator: UnityEditor.LookDevSettingsWindow.UINumElement;
    static UINumButton: UnityEditor.LookDevSettingsWindow.UINumElement;
    static UITotalElement: UnityEditor.LookDevSettingsWindow.UINumElement;
  }
}
