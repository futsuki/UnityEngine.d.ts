declare namespace UnityEditor {
  class MonoImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    SetDefaultReferences(name: string[], target: UnityEngine.Object[]): void;
    static GetAllRuntimeMonoScripts(): UnityEditor.MonoScript[];
    static SetExecutionOrder(script: UnityEditor.MonoScript, order: number): void;
    static GetExecutionOrder(script: UnityEditor.MonoScript): number;
    GetScript(): UnityEditor.MonoScript;
    GetDefaultReference(name: string): UnityEngine.Object;
    // properties
    // fields
  }
}
