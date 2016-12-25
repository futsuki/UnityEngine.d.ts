declare namespace UnityEditor {
  class LabelGUI {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnDisable(): any;
    OnLostFocus(): any;
    AssetLabelsChangedForObject(asset: any): any;
    SaveLabels(): any;
    AssetLabelListCallback(element: UnityEditor.PopupList.ListElement): any;
    InitLabelCache(assets: any[]): any;
    OnLabelGUI(assets: any[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
