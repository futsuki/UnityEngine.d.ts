declare namespace UnityEngine.SendMouseEvents {
  class HitInfo {
    // constructors
    private constructor();
    // methods
    SendMessage(name: string): void;
    static Compare(lhs: UnityEngine.SendMouseEvents.HitInfo, rhs: UnityEngine.SendMouseEvents.HitInfo): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    target: UnityEngine.GameObject;
    camera: UnityEngine.Camera;
  }
}
