declare namespace UnityEditor {
  class MonoScript extends UnityEngine.TextAsset {
    // constructors
    constructor();
    // methods
    GetClass(): any;
    static FromMonoBehaviour(behaviour: any): UnityEditor.MonoScript;
    static FromScriptableObject(scriptableObject: UnityEngine.ScriptableObject): UnityEditor.MonoScript;
    // properties
    // fields
  }
}
