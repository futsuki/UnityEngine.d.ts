declare namespace UnityEditor {
  class PresetLibraryEditorState extends System.Object {
    // constructors
    constructor(prefix: string);
    // methods
    static GetItemViewMode(prefix: string): UnityEditor.PresetLibraryEditorState.ItemViewMode;
    TransferEditorPrefsState(load: boolean): void;
    // properties
    itemViewMode: UnityEditor.PresetLibraryEditorState.ItemViewMode;
    // fields
    m_PreviewHeight: number;
    m_ScrollPosition: any;
    m_CurrrentLibrary: string;
    m_HoverIndex: number;
    m_RenameOverlay: UnityEditor.RenameOverlay;
    m_Prefix: string;
  }
}
