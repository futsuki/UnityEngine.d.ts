declare namespace UnityEngine.SendMouseEvents {
  class HitInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SendMessage(name: string): void;
    static Compare(lhs: UnityEngine.SendMouseEvents.HitInfo, rhs: UnityEngine.SendMouseEvents.HitInfo): boolean;
    // properties
    // fields
    target: UnityEngine.GameObject;
    camera: UnityEngine.Camera;
  }
}
