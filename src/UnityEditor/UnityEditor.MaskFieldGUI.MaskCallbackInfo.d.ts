declare namespace UnityEditor.MaskFieldGUI {
  class MaskCallbackInfo extends System.Object {
    // constructors
    constructor(controlID: number);
    // methods
    static GetSelectedValueForControl(controlID: number, mask: number, changedFlags: any, changedToValue: any): number;
    // properties
    // fields
    static m_Instance: UnityEditor.MaskFieldGUI.MaskCallbackInfo;
  }
}
