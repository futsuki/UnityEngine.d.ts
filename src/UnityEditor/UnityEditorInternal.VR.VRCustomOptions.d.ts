declare namespace UnityEditorInternal.VR {
  class VRCustomOptions {
    // constructors
    private constructor();
    // methods
    Initialize(vrEditorSettings: UnityEditor.SerializedProperty): void;
    Draw(rect: any): void;
    GetHeight(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    IsExpanded: boolean;
    // fields
  }
}
