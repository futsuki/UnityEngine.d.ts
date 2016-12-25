declare namespace UnityEditorInternal.ProfilerInstrumentationPopup {
  class InputData {
    // constructors
    constructor();
    // methods
    BuildQuery(prefix: string): any;
    DeselectAll(): any;
    ResetScores(): any;
    GetFilteredList(prefix: string): any;
    GetFilteredCount(prefix: string): number;
    NewOrMatchingElement(label: string): UnityEditor.PopupList.ListElement;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ListElements: any;
    m_CloseOnSelection: boolean;
    m_AllowCustom: boolean;
    m_EnableAutoCompletion: boolean;
    m_SortAlphabetically: boolean;
    m_OnSelectCallback: UnityEditor.PopupList.OnSelectCallback;
    m_MaxCount: number;
  }
}
