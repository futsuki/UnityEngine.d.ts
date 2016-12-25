declare namespace UnityEditor {
  class EditorUserSettings {
    // constructors
    constructor();
    // methods
    static GetConfigValue(name: string): string;
    static SetConfigValue(name: string, value: string): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    static AutomaticAdd: boolean;
    static WorkOffline: boolean;
    static showFailedCheckout: boolean;
    static semanticMergeMode: UnityEditor.SemanticMergeMode;
    name: string;
    hideFlags: any;
    // fields
  }
}
