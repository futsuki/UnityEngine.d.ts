declare namespace UnityEditor {
  class CurveWrapper {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    renderer: UnityEditor.CurveRenderer;
    readonly curve: any;
    readonly rootGameObjet: any;
    readonly animationClip: any;
    readonly timeOffset: number;
    readonly clipIsEditable: boolean;
    readonly animationIsEditable: boolean;
    readonly selectionID: number;
    selectionBindingInterface: UnityEditor.ISelectionBinding;
    changed: boolean;
    // fields
    id: number;
    binding: UnityEditor.EditorCurveBinding;
    groupId: number;
    regionId: number;
    color: any;
    wrapColorMultiplier: any;
    readOnly: boolean;
    hidden: boolean;
    getAxisUiScalarsCallback: (() => any);
    setAxisUiScalarsCallback: ((any) => void);
    selected: UnityEditor.CurveWrapper.SelectionMode;
    listIndex: number;
    vRangeMin: number;
    vRangeMax: number;
  }
}
