declare namespace UnityEditor.RestService {
  class ScriptEditorSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static Save(): void;
    static Load(): void;
    // properties
    static Name: string;
    static ServerURL: string;
    static ProcessId: number;
    static OpenDocuments: string[];
    // fields
  }
}
