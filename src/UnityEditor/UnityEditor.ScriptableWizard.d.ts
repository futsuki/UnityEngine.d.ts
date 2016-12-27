declare namespace UnityEditor {
  class ScriptableWizard extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static DisplayWizard(title: string, klass: any, createButtonName: string): UnityEditor.ScriptableWizard;
    static DisplayWizard(title: string, klass: any): UnityEditor.ScriptableWizard;
    static DisplayWizard(title: string, klass: any, createButtonName: string, otherButtonName: string): UnityEditor.ScriptableWizard;
    // properties
    helpString: string;
    errorString: string;
    createButtonName: string;
    otherButtonName: string;
    isValid: boolean;
    // fields
  }
}
