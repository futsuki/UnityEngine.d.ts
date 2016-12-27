declare namespace UnityEditor.EditorGUI {
  class DelayedTextEditor extends UnityEditor.EditorGUI.RecycledTextEditor {
    // constructors
    constructor();
    // methods
    BeginGUI(): void;
    EndGUI(type: any): void;
    EndEditing(): void;
    OnGUI(id: number, value: string, changed: any): string;
    // properties
    // fields
  }
}
