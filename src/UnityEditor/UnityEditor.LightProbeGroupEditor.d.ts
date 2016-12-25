declare namespace UnityEditor {
  class LightProbeGroupEditor {
    // constructors
    constructor(group: any, inspector: UnityEditor.LightProbeGroupInspector);
    // methods
    SetEditing(editing: boolean): any;
    AddProbe(position: any): any;
    SelectAllProbes(): any;
    DeselectProbes(): any;
    DuplicateSelectedProbes(): any;
    RemoveSelectedProbes(): any;
    PullProbePositions(): any;
    PushProbePositions(): any;
    HandleEditMenuHotKeyCommands(): any;
    static TetrahedralizeSceneProbes(positions: any, indices: any): any;
    OnSceneGUI(transform: any): boolean;
    MarkTetrahedraDirty(): any;
    GetPosition(idx: number): any;
    GetWorldPosition(idx: number): any;
    SetPosition(idx: number, position: any): any;
    GetDefaultColor(): any;
    GetSelectedColor(): any;
    GetPointScale(): number;
    GetSelectedPositions(): any[];
    UpdateSelectedPosition(idx: number, position: any): any;
    GetPositions(): any;
    GetUnselectedPositions(): any[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    drawTetrahedra: boolean;
    readonly selectedProbeBounds: any;
    readonly bounds: any;
    readonly Count: number;
    readonly SelectedCount: number;
    // fields
  }
}
