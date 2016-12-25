declare namespace UnityEditor {
  class GameViewSizes {
    // constructors
    constructor();
    // methods
    GetGroup(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType): UnityEditor.GameViewSizeGroup;
    SaveToHDD(): any;
    IsDefaultStandaloneScreenSize(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType, index: number): boolean;
    IsRemoteScreenSize(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType, index: number): boolean;
    GetDefaultStandaloneIndex(): number;
    RefreshStandaloneAndRemoteDefaultSizes(): any;
    RefreshStandaloneDefaultScreenSize(width: number, height: number): any;
    RefreshRemoteScreenSize(width: number, height: number): any;
    Changed(): any;
    GetChangeID(): number;
    static GetConstrainedRect(startRect: any, groupType: UnityEditor.GameViewSizeGroupType, gameViewSizeIndex: number, fitsInsideRect: any): any;
    static GetRenderTargetSize(startRect: any, groupType: UnityEditor.GameViewSizeGroupType, gameViewSizeIndex: number, clamped: any): any;
    static BuildTargetGroupToGameViewSizeGroup(buildTargetGroup: UnityEditor.BuildTargetGroup): UnityEditor.GameViewSizeGroupType;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly currentGroupType: UnityEditor.GameViewSizeGroupType;
    readonly currentGroup: UnityEditor.GameViewSizeGroup;
    name: string;
    hideFlags: any;
    // fields
  }
}
