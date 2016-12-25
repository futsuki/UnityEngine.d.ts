declare namespace UnityEditor.ExposablePopupMenu {
  class ItemData {
    // constructors
    constructor(content: any, style: any, on: boolean, enabled: boolean, userData: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_GUIContent: any;
    m_Style: any;
    m_On: boolean;
    m_Enabled: boolean;
    m_UserData: any;
    m_Width: number;
  }
}
