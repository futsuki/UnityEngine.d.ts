declare namespace UnityEditor {
  class AnimationWindowManipulator {
    // constructors
    constructor();
    // methods
    HandleEvents(): void;
    IgnoreEvents(): void;
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
