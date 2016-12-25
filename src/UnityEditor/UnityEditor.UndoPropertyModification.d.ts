declare namespace UnityEditor {
  class UndoPropertyModification {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    keepPrefabOverride: boolean;
    // fields
    previousValue: UnityEditor.PropertyModification;
    currentValue: UnityEditor.PropertyModification;
  }
}
