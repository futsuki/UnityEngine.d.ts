declare namespace UnityEditor {
  class EditorUserSettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static GetConfigValue(name: string): string;
    static SetConfigValue(name: string, value: string): void;
    // properties
    static AutomaticAdd: boolean;
    static WorkOffline: boolean;
    static showFailedCheckout: boolean;
    static semanticMergeMode: UnityEditor.SemanticMergeMode;
    // fields
  }
}
