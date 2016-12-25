declare namespace UnityEditor.LookDevView {
  class PreviewContext {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_PreviewUtility: UnityEditor.PreviewRenderUtility[];
    m_PreviewResult: any[];
    m_PreviewCB: UnityEditor.LookDevView.PreviewContextCB[];
  }
}
