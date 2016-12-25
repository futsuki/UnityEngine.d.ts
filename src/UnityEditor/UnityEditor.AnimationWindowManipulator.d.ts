declare namespace UnityEditor {
  class AnimationWindowManipulator {
    // constructors
    constructor();
    // methods
    HandleEvents(): any;
    IgnoreEvents(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    onStartDrag: UnityEditor.AnimationWindowManipulator.OnStartDragDelegate;
    onDrag: UnityEditor.AnimationWindowManipulator.OnDragDelegate;
    onEndDrag: UnityEditor.AnimationWindowManipulator.OnEndDragDelegate;
    rect: any;
    controlID: number;
  }
}
