declare namespace UnityEditor {
  class PolygonEditorUtility {
    // constructors
    constructor();
    // methods
    Reset(): void;
    StartEditing(collider: any): void;
    StopEditing(): void;
    OnSceneGUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
