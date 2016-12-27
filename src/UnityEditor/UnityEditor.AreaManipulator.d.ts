declare namespace UnityEditor {
  class AreaManipulator {
    // constructors
    constructor(style: any, cursor: UnityEditor.MouseCursor);
    constructor(style: any);
    // methods
    OnGUI(widgetRect: any): void;
    HandleEvents(): void;
    IgnoreEvents(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    onStartDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    onDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    onEndDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    rect: any;
    controlID: number;
  }
}
