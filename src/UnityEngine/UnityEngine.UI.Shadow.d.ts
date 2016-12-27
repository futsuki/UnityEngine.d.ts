declare namespace UnityEngine.UI {
  class Shadow extends UnityEngine.UI.BaseMeshEffect {
    // constructors
    protected constructor();
    // methods
    ModifyMesh(vh: UnityEngine.UI.VertexHelper): void;
    ModifyMesh(mesh: UnityEngine.Mesh): void;
    // properties
    effectColor: UnityEngine.Color;
    effectDistance: UnityEngine.Vector2;
    useGraphicAlpha: boolean;
    // fields
  }
}
