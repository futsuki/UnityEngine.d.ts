declare namespace UnityEditor {
  class EyeDropper {
    // constructors
    private constructor();
    // methods
    static Start(viewToUpdate: UnityEditor.GUIView): void;
    static GetPickedColor(): any;
    static GetLastPickedColor(): any;
    static DrawPreview(position: any): void;
    // properties
    // fields
  }
}
