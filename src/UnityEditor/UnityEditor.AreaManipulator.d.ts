declare namespace UnityEditor {
  class AreaManipulator {
    // constructors
    constructor(style: any, cursor: UnityEditor.MouseCursor);
    constructor(style: any);
    // methods
    OnGUI(widgetRect: any): any;
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
