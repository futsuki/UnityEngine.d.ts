declare namespace UnityEditor.RestService {
  class ScriptEditorSettings {
    // constructors
    constructor();
    // methods
    static Save(): any;
    static Load(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static Name: string;
    static ServerURL: string;
    static ProcessId: number;
    static OpenDocuments: any;
    // fields
  }
}
