declare namespace UnityEditor {
  class SavedFilter {
    // constructors
    constructor(name: string, filter: UnityEditor.SearchFilter, depth: number, previewSize: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Name: string;
    m_Depth: number;
    m_PreviewSize: number;
    m_ID: number;
    m_Filter: UnityEditor.SearchFilter;
  }
}
