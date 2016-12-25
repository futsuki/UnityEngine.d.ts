declare namespace UnityEditor.SceneViewOverlay {
  class OverlayWindow {
    // constructors
    constructor();
    // methods
    CompareTo(other: UnityEditor.SceneViewOverlay.OverlayWindow): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Title: any;
    m_SceneViewFunc: UnityEditor.SceneViewOverlay.WindowFunction;
    m_PrimaryOrder: number;
    m_SecondaryOrder: number;
    m_Target: any;
  }
}
