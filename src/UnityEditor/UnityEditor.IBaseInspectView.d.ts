declare namespace UnityEditor {
  class IBaseInspectView {
    // constructors
    protected constructor();
    // methods
    UpdateInstructions(): void;
    DrawInstructionList(): void;
    DrawSelectedInstructionDetails(): void;
    Unselect(): void;
    SelectRow(index: number): void;
    ShowOverlay(): void;
    // properties
    // fields
  }
}
