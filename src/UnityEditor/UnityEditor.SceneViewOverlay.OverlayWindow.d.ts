declare namespace UnityEditor.SceneViewOverlay {
  class OverlayWindow extends System.Object {
    // constructors
    constructor();
    // methods
    CompareTo(other: UnityEditor.SceneViewOverlay.OverlayWindow): number;
    // properties
    // fields
    m_Title: any;
    m_SceneViewFunc: ((target: UnityEngine.Object, sceneView: UnityEditor.SceneView) => void);
    m_PrimaryOrder: number;
    m_SecondaryOrder: number;
    m_Target: UnityEngine.Object;
  }
}
