declare namespace UnityEngine.AI {
  class OffMeshLink extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    UpdatePositions(): void;
    // properties
    activated: boolean;
    readonly occupied: boolean;
    costOverride: number;
    biDirectional: boolean;
    navMeshLayer: number;
    area: number;
    autoUpdatePositions: boolean;
    startTransform: UnityEngine.Transform;
    endTransform: UnityEngine.Transform;
    // fields
  }
}
