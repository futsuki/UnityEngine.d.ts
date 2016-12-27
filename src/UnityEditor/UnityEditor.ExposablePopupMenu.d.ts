declare namespace UnityEditor {
  class ExposablePopupMenu {
    // constructors
    constructor();
    // methods
    Init(items: any, itemSpacing: number, minWidthOfPopup: number, popupButtonData: UnityEditor.ExposablePopupMenu.PopupButtonData, selectionChangedCallback: ((UnityEditor.ExposablePopupMenu.ItemData) => void)): void;
    OnGUI(rect: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
