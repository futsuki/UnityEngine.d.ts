declare namespace UnityEditor {
  class ObjectListAreaState extends System.Object {
    // constructors
    constructor();
    // methods
    OnAwake(): void;
    // properties
    // fields
    m_SelectedInstanceIDs: number[];
    m_LastClickedInstanceID: number;
    m_HadKeyboardFocusLastEvent: boolean;
    m_ExpandedInstanceIDs: number[];
    m_RenameOverlay: UnityEditor.RenameOverlay;
    m_CreateAssetUtility: UnityEditor.CreateAssetUtility;
    m_NewAssetIndexInList: number;
    m_ScrollPosition: any;
    m_GridSize: number;
  }
}
