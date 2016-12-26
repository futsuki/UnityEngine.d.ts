declare namespace UnityEditor {
  class GameViewSizes {
    // constructors
    constructor();
    // methods
    GetGroup(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType): UnityEditor.GameViewSizeGroup;
    SaveToHDD(): void;
    IsDefaultStandaloneScreenSize(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType, index: number): boolean;
    IsRemoteScreenSize(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType, index: number): boolean;
    GetDefaultStandaloneIndex(): number;
    RefreshStandaloneAndRemoteDefaultSizes(): void;
    RefreshStandaloneDefaultScreenSize(width: number, height: number): void;
    RefreshRemoteScreenSize(width: number, height: number): void;
    Changed(): void;
    GetChangeID(): number;
    static GetConstrainedRect(startRect: any, groupType: UnityEditor.GameViewSizeGroupType, gameViewSizeIndex: number, fitsInsideRect: any): any;
    static GetRenderTargetSize(startRect: any, groupType: UnityEditor.GameViewSizeGroupType, gameViewSizeIndex: number, clamped: any): any;
    static BuildTargetGroupToGameViewSizeGroup(buildTargetGroup: UnityEditor.BuildTargetGroup): UnityEditor.GameViewSizeGroupType;
    SetDirty(): void;
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
