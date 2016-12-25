declare namespace UnityEditorInternal.AnimationRecording {
  class RotationModification {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    x: UnityEditor.UndoPropertyModification;
    y: UnityEditor.UndoPropertyModification;
    z: UnityEditor.UndoPropertyModification;
    w: UnityEditor.UndoPropertyModification;
    lastQuatModification: UnityEditor.UndoPropertyModification;
    useEuler: boolean;
    eulerX: UnityEditor.UndoPropertyModification;
    eulerY: UnityEditor.UndoPropertyModification;
    eulerZ: UnityEditor.UndoPropertyModification;
  }
}
