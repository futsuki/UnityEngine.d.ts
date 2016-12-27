declare namespace UnityEditor {
  class ExposablePopupMenu extends System.Object {
    // constructors
    constructor();
    // methods
    Init(items: UnityEditor.ExposablePopupMenu.ItemData[], itemSpacing: number, minWidthOfPopup: number, popupButtonData: UnityEditor.ExposablePopupMenu.PopupButtonData, selectionChangedCallback: ((obj: UnityEditor.ExposablePopupMenu.ItemData) => void)): void;
    OnGUI(rect: any): number;
    // properties
    // fields
  }
}
