declare namespace UnityEditor {
  class LightProbeGroupEditor {
    // constructors
    constructor(group: any, inspector: UnityEditor.LightProbeGroupInspector);
    // methods
    SetEditing(editing: boolean): void;
    AddProbe(position: any): void;
    SelectAllProbes(): void;
    DeselectProbes(): void;
    DuplicateSelectedProbes(): void;
    RemoveSelectedProbes(): void;
    PullProbePositions(): void;
    PushProbePositions(): void;
    HandleEditMenuHotKeyCommands(): void;
    static TetrahedralizeSceneProbes(positions: any, indices: any): void;
    OnSceneGUI(transform: any): boolean;
    MarkTetrahedraDirty(): void;
    GetPosition(idx: number): any;
    GetWorldPosition(idx: number): any;
    SetPosition(idx: number, position: any): void;
    GetDefaultColor(): any;
    GetSelectedColor(): any;
    GetPointScale(): number;
    GetSelectedPositions(): any[];
    UpdateSelectedPosition(idx: number, position: any): void;
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
