declare namespace UnityEditorInternal {
  class DopeLine extends System.Object {
    // constructors
    constructor(hierarchyNodeID: number, curves: UnityEditorInternal.AnimationWindowCurve[]);
    // methods
    InvalidateKeyframes(): void;
    // properties
    readonly valueType: any;
    readonly isPptrDopeline: boolean;
    readonly isEditable: boolean;
    readonly hierarchyNodeID: number;
    readonly curves: UnityEditorInternal.AnimationWindowCurve[];
    readonly keys: UnityEditorInternal.AnimationWindowKeyframe[];
    // fields
    static dopekeyStyle: any;
    position: any;
    objectType: any;
    tallMode: boolean;
    hasChildren: boolean;
    isMasterDopeline: boolean;
  }
}
