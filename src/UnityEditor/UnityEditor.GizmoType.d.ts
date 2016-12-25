declare namespace UnityEditor {
  class GizmoType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Pickable: UnityEditor.GizmoType;
    static NotInSelectionHierarchy: UnityEditor.GizmoType;
    static NonSelected: UnityEditor.GizmoType;
    static Selected: UnityEditor.GizmoType;
    static Active: UnityEditor.GizmoType;
    static InSelectionHierarchy: UnityEditor.GizmoType;
    static NotSelected: UnityEditor.GizmoType;
    static SelectedOrChild: UnityEditor.GizmoType;
  }
}
