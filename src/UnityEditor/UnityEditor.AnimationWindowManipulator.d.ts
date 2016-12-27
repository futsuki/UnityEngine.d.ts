declare namespace UnityEditor {
  class AnimationWindowManipulator extends System.Object {
    // constructors
    constructor();
    // methods
    HandleEvents(): void;
    IgnoreEvents(): void;
    // properties
    // fields
    onStartDrag: ((manipulator: UnityEditor.AnimationWindowManipulator, evt: any) => boolean);
    onDrag: ((manipulator: UnityEditor.AnimationWindowManipulator, evt: any) => boolean);
    onEndDrag: ((manipulator: UnityEditor.AnimationWindowManipulator, evt: any) => boolean);
    rect: any;
    controlID: number;
  }
}
