declare namespace UnityEditor {
  class TransformManipulator {
    // constructors
    constructor();
    // methods
    static BeginManipulationHandling(lockHandleWhileDragging: boolean): any;
    static EndManipulationHandling(): any;
    static SetScaleDelta(scaleDelta: any, pivotRotation: any): any;
    static SetResizeDelta(scaleDelta: any, pivotPosition: any, pivotRotation: any): any;
    static SetPositionDelta(positionDelta: any): any;
    static DebugAlignment(targetRotation: any): any;
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
