declare namespace UnityEditor {
  class LabelGUI {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnLostFocus(): void;
    AssetLabelsChangedForObject(asset: any): void;
    SaveLabels(): void;
    AssetLabelListCallback(element: UnityEditor.PopupList.ListElement): void;
    InitLabelCache(assets: any[]): void;
    OnLabelGUI(assets: any[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
