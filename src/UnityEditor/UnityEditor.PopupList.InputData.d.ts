declare namespace UnityEditor.PopupList {
  class InputData {
    // constructors
    constructor();
    // methods
    DeselectAll(): void;
    ResetScores(): void;
    BuildQuery(prefix: string): any;
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
