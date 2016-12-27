declare namespace UnityEditor {
  class ScriptExecutionOrderInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): void;
    DrawElement(r: any, obj: any, dragging: boolean): void;
    // properties
    // fields
    static m_Styles: UnityEditor.ScriptExecutionOrderInspector.Styles;
  }
}
