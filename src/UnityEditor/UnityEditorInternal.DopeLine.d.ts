declare namespace UnityEditorInternal {
  class DopeLine {
    // constructors
    constructor(hierarchyNodeID: number, curves: UnityEditorInternal.AnimationWindowCurve[]);
    // methods
    InvalidateKeyframes(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly valueType: any;
    readonly isPptrDopeline: boolean;
    readonly isEditable: boolean;
    readonly hierarchyNodeID: number;
    readonly curves: UnityEditorInternal.AnimationWindowCurve[];
    readonly keys: any;
    // fields
    static dopekeyStyle: any;
    position: any;
    objectType: any;
    tallMode: boolean;
    hasChildren: boolean;
    isMasterDopeline: boolean;
  }
}
