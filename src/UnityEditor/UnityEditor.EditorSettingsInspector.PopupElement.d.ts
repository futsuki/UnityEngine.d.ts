declare namespace UnityEditor.EditorSettingsInspector {
  class PopupElement {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly Enabled: boolean;
    // fields
    id: string;
    requiresTeamLicense: boolean;
    content: any;
  }
}
