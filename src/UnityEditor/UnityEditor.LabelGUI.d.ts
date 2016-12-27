declare namespace UnityEditor {
  class LabelGUI extends System.Object {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnLostFocus(): void;
    AssetLabelsChangedForObject(asset: UnityEngine.Object): void;
    SaveLabels(): void;
    AssetLabelListCallback(element: UnityEditor.PopupList.ListElement): void;
    InitLabelCache(assets: UnityEngine.Object[]): void;
    OnLabelGUI(assets: UnityEngine.Object[]): void;
    // properties
    // fields
  }
}
