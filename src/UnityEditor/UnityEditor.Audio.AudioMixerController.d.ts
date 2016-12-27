declare namespace UnityEditor.Audio {
  class AudioMixerController extends UnityEngine.Audio.AudioMixer {
    // constructors
    constructor();
    // methods
    GetGroupVUInfo(group: UnityEditor.GUID, fader: boolean, vuLevel: any, vuPeak: any): number;
    UpdateMuteSolo(): void;
    UpdateBypass(): void;
    CurrentViewContainsGroup(group: UnityEditor.GUID): boolean;
    static EditingTargetSnapshot(): boolean;
    OnChangedExposedParameter(): void;
    ClearEventHandlers(): void;
    AddExposedParameter(path: UnityEditor.Audio.AudioParameterPath): void;
    ContainsExposedParameter(parameter: UnityEditor.GUID): boolean;
    RemoveExposedParameter(parameter: UnityEditor.GUID): void;
    ResolveExposedParameterPath(parameter: UnityEditor.GUID, getOnlyBasePath: boolean): string;
    static CreateMixerControllerAtPath(path: string): UnityEditor.Audio.AudioMixerController;
    CreateDefaultAsset(path: string): void;
    BuildTestSetup(minSpan: number, maxSpan: number, maxGroups: number): void;
    GetAllAudioGroupsSlow(): UnityEditor.Audio.AudioMixerGroupController[];
    HasMoreThanOneGroup(): boolean;
    AreAnyOfTheGroupsInTheListAncestors(groups: UnityEditor.Audio.AudioMixerGroupController[]): boolean;
    DeleteGroups(groups: UnityEditor.Audio.AudioMixerGroupController[]): void;
    RemoveEffect(effect: UnityEditor.Audio.AudioMixerEffectController, group: UnityEditor.Audio.AudioMixerGroupController): void;
    OnSubAssetChanged(): void;
    CloneNewSnapshotFromTarget(storeUndoState: boolean): void;
    RemoveTargetSnapshot(): void;
    RemoveSnapshot(snapshot: UnityEditor.Audio.AudioMixerSnapshotController): void;
    CreateNewGroup(name: string, storeUndoState: boolean): UnityEditor.Audio.AudioMixerGroupController;
    AddChildToParent(child: UnityEditor.Audio.AudioMixerGroupController, parent: UnityEditor.Audio.AudioMixerGroupController): void;
    RemoveGroupsFromParent(groups: UnityEditor.Audio.AudioMixerGroupController[], storeUndoState: boolean): void;
    FindParentGroup(node: UnityEditor.Audio.AudioMixerGroupController, group: UnityEditor.Audio.AudioMixerGroupController): UnityEditor.Audio.AudioMixerGroupController;
    CopyEffect(sourceEffect: UnityEditor.Audio.AudioMixerEffectController): UnityEditor.Audio.AudioMixerEffectController;
    DuplicateGroups(sourceGroups: UnityEditor.Audio.AudioMixerGroupController[]): UnityEditor.Audio.AudioMixerGroupController[];
    CopyEffectSettingsToAllSnapshots(group: UnityEditor.Audio.AudioMixerGroupController, effectIndex: number, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, includeWetParam: boolean): void;
    CopyAllSettingsToAllSnapshots(group: UnityEditor.Audio.AudioMixerGroupController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): void;
    CopyAttenuationToAllSnapshots(group: UnityEditor.Audio.AudioMixerGroupController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): void;
    ReparentSelection(newParent: UnityEditor.Audio.AudioMixerGroupController, insertionIndex: number, selection: UnityEditor.Audio.AudioMixerGroupController[]): void;
    static InsertEffect(effect: UnityEditor.Audio.AudioMixerEffectController, targetEffects: any, targetIndex: number): boolean;
    static MoveEffect(sourceEffects: any, sourceIndex: number, targetEffects: any, targetIndex: number): boolean;
    static FixNameForPopupMenu(s: string): string;
    ClearSendConnectionsTo(sendTarget: UnityEditor.Audio.AudioMixerEffectController): void;
    static DoesTheTemporaryGraphHaveAnyCycles(allGroups: UnityEditor.Audio.AudioMixerGroupController[], identifiedLoop: UnityEditor.Audio.AudioMixerController.ConnectionNode[], graph: any): boolean;
    static WillChangeOfEffectTargetCauseFeedback(allGroups: UnityEditor.Audio.AudioMixerGroupController[], groupWhoseEffectIsChanged: UnityEditor.Audio.AudioMixerGroupController, effectWhoseTargetIsChanged: number, targetToTest: UnityEditor.Audio.AudioMixerEffectController, identifiedLoop: UnityEditor.Audio.AudioMixerController.ConnectionNode[]): boolean;
    static WillModificationOfTopologyCauseFeedback(allGroups: UnityEditor.Audio.AudioMixerGroupController[], groupsToBeMoved: UnityEditor.Audio.AudioMixerGroupController[], newParentForMovedGroups: UnityEditor.Audio.AudioMixerGroupController, identifiedLoop: UnityEditor.Audio.AudioMixerController.ConnectionNode[]): boolean;
    static WillMovingEffectCauseFeedback(allGroups: UnityEditor.Audio.AudioMixerGroupController[], sourceGroup: UnityEditor.Audio.AudioMixerGroupController, sourceIndex: number, targetGroup: UnityEditor.Audio.AudioMixerGroupController, targetIndex: number, identifiedLoop: UnityEditor.Audio.AudioMixerController.ConnectionNode[]): boolean;
    static DbToLin(x: number): number;
    CloneViewFromCurrent(): void;
    DeleteView(index: number): void;
    SetView(index: number): void;
    SanitizeGroupViews(): void;
    ForceSetView(index: number): void;
    AddGroupToCurrentView(group: UnityEditor.Audio.AudioMixerGroupController): void;
    SetCurrentViewVisibility(guids: UnityEditor.GUID[]): void;
    GetCurrentViewGroupList(): UnityEditor.Audio.AudioMixerGroupController[];
    static VolumeToScreenMapping(value: number, screenRange: number, forward: boolean): number;
    OnUnitySelectionChanged(): void;
    // properties
    readonly allGroups: UnityEditor.Audio.AudioMixerGroupController[];
    readonly numExposedParameters: number;
    exposedParameters: UnityEditor.Audio.ExposedAudioParameter[];
    masterGroup: UnityEditor.Audio.AudioMixerGroupController;
    startSnapshot: UnityEngine.Audio.AudioMixerSnapshot;
    TargetSnapshot: UnityEditor.Audio.AudioMixerSnapshotController;
    snapshots: UnityEditor.Audio.AudioMixerSnapshotController[];
    readonly CachedSelection: UnityEditor.Audio.AudioMixerGroupController[];
    currentViewIndex: number;
    views: UnityEditor.Audio.MixerGroupView[];
    readonly isSuspended: boolean;
    // fields
    m_HighlightEffectIndex: number;
    static kMinVolume: number;
    static kMaxEffect: number;
    static kVolumeWarp: number;
    static s_GroupEffectDisplaySeperator: string;
  }
}
