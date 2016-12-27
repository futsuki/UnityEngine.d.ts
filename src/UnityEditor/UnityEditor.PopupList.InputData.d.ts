declare namespace UnityEditor.PopupList {
  class InputData extends System.Object {
    // constructors
    constructor();
    // methods
    DeselectAll(): void;
    ResetScores(): void;
    BuildQuery(prefix: string): any;
    GetFilteredList(prefix: string): any;
    GetFilteredCount(prefix: string): number;
    NewOrMatchingElement(label: string): UnityEditor.PopupList.ListElement;
    // properties
    // fields
    m_ListElements: UnityEditor.PopupList.ListElement[];
    m_CloseOnSelection: boolean;
    m_AllowCustom: boolean;
    m_EnableAutoCompletion: boolean;
    m_SortAlphabetically: boolean;
    m_OnSelectCallback: ((element: UnityEditor.PopupList.ListElement) => void);
    m_MaxCount: number;
  }
}
