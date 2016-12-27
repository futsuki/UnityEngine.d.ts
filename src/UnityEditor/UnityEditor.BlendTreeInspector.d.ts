declare namespace UnityEditor {
  class BlendTreeInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    ClickDragFloat(position: any, value: number): number;
    ClickDragFloat(position: any, value: number, alignRight: boolean): number;
    EndDragChild(list: UnityEditorInternal.ReorderableList): void;
    AddButton(rect: any, list: UnityEditorInternal.ReorderableList): void;
    static DeleteBlendTreeDialog(toDelete: string): boolean;
    RemoveButton(list: UnityEditorInternal.ReorderableList): void;
    DrawChild(r: any, index: number, isActive: boolean, isFocused: boolean): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnDisable(): void;
    OnDestroy(): void;
    // properties
    // fields
  }
}
