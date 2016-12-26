declare namespace UnityEditor {
  class TransformManipulator {
    // constructors
    constructor();
    // methods
    static BeginManipulationHandling(lockHandleWhileDragging: boolean): void;
    static EndManipulationHandling(): any;
    static SetScaleDelta(scaleDelta: any, pivotRotation: any): void;
    static SetResizeDelta(scaleDelta: any, pivotPosition: any, pivotRotation: any): void;
    static SetPositionDelta(positionDelta: any): void;
    static DebugAlignment(targetRotation: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly mouseDownHandlePosition: any;
    static readonly active: boolean;
    static readonly individualSpace: boolean;
    // fields
  }
}
