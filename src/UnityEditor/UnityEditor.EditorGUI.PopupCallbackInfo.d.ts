declare namespace UnityEditor.EditorGUI {
  class PopupCallbackInfo extends System.Object {
    // constructors
    constructor(controlID: number);
    // methods
    static GetSelectedValueForControl(controlID: number, selected: number): number;
    // properties
    // fields
    static instance: UnityEditor.EditorGUI.PopupCallbackInfo;
  }
}
