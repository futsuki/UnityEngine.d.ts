declare namespace UnityEngine {
  class Joint extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    connectedBody: UnityEngine.Rigidbody;
    axis: UnityEngine.Vector3;
    anchor: UnityEngine.Vector3;
    connectedAnchor: UnityEngine.Vector3;
    autoConfigureConnectedAnchor: boolean;
    breakForce: number;
    breakTorque: number;
    enableCollision: boolean;
    enablePreprocessing: boolean;
    readonly currentForce: UnityEngine.Vector3;
    readonly currentTorque: UnityEngine.Vector3;
    // fields
  }
}
