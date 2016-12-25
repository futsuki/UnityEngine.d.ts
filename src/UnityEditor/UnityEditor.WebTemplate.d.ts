declare namespace UnityEditor {
  class WebTemplate {
    // constructors
    constructor();
    // methods
    Equals(other: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    ToGUIContent(defaultIcon: any): any;
    GetType(): any;
    // properties
    readonly CustomKeys: string[];
    // fields
    m_Path: string;
    m_Name: string;
    m_Thumbnail: any;
    m_CustomKeys: string[];
  }
}
