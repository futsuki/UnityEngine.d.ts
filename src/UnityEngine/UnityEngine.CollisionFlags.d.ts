declare namespace UnityEngine {
  class CollisionFlags {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEngine.CollisionFlags;
    static Sides: UnityEngine.CollisionFlags;
    static Above: UnityEngine.CollisionFlags;
    static Below: UnityEngine.CollisionFlags;
    static CollidedSides: UnityEngine.CollisionFlags;
    static CollidedAbove: UnityEngine.CollisionFlags;
    static CollidedBelow: UnityEngine.CollisionFlags;
  }
}
