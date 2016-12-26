declare namespace UnityEngine.EventSystems {
  class MoveDirection {
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
    static Left: UnityEngine.EventSystems.MoveDirection;
    static Up: UnityEngine.EventSystems.MoveDirection;
    static Right: UnityEngine.EventSystems.MoveDirection;
    static Down: UnityEngine.EventSystems.MoveDirection;
    static None: UnityEngine.EventSystems.MoveDirection;
  }
}
