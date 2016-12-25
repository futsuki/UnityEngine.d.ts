declare namespace UnityEditor {
  class KnobState {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    dragStartPos: number;
    dragStartValue: number;
    isDragging: boolean;
    isEditing: boolean;
  }
}
