declare namespace UnityEditor.AvatarMaskInspector {
  class NodeInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    m_Expanded: boolean;
    m_Show: boolean;
    m_Enabled: boolean;
    m_ParentIndex: number;
    m_ChildIndices: any;
    m_Depth: number;
    m_Path: UnityEditor.SerializedProperty;
    m_Weight: UnityEditor.SerializedProperty;
    m_Name: string;
  }
}
