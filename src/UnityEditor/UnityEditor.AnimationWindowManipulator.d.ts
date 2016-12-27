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
    onStartDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    onDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    onEndDrag: ((UnityEditor.AnimationWindowManipulator, any) => boolean);
    rect: any;
    controlID: number;
  }
}
