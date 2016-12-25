declare namespace UnityEditor.MaskFieldGUI {
  class MaskCallbackInfo {
    // constructors
    constructor(controlID: number);
    // methods
    static GetSelectedValueForControl(controlID: number, mask: number, changedFlags: any, changedToValue: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static m_Instance: UnityEditor.MaskFieldGUI.MaskCallbackInfo;
  }
}
