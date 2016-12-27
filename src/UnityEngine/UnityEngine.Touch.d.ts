declare namespace UnityEngine {
  class Touch extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    fingerId: number;
    position: UnityEngine.Vector2;
    rawPosition: UnityEngine.Vector2;
    deltaPosition: UnityEngine.Vector2;
    deltaTime: number;
    tapCount: number;
    phase: UnityEngine.TouchPhase;
    pressure: number;
    maximumPossiblePressure: number;
    type: UnityEngine.TouchType;
    altitudeAngle: number;
    azimuthAngle: number;
    radius: number;
    radiusVariance: number;
    // fields
  }
}
