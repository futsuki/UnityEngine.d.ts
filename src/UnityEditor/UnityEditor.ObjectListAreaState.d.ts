declare namespace UnityEditor {
  class ObjectListAreaState {
    // constructors
    constructor();
    // methods
    OnAwake(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_SelectedInstanceIDs: any;
    m_LastClickedInstanceID: number;
    m_HadKeyboardFocusLastEvent: boolean;
    m_ExpandedInstanceIDs: any;
    m_RenameOverlay: UnityEditor.RenameOverlay;
    m_CreateAssetUtility: UnityEditor.CreateAssetUtility;
    m_NewAssetIndexInList: number;
    m_ScrollPosition: any;
    m_GridSize: number;
  }
}
