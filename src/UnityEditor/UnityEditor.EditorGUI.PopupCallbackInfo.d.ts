declare namespace UnityEditor.EditorGUI {
  class PopupCallbackInfo {
    // constructors
    constructor(controlID: number);
    // methods
    static GetSelectedValueForControl(controlID: number, selected: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static instance: UnityEditor.EditorGUI.PopupCallbackInfo;
  }
}
