declare namespace UnityEditor.Collaboration {
  class Collab {
    // constructors
    constructor();
    // methods
    GetProjectPath(): string;
    IsConnected(): boolean;
    JobRunning(a_jobID: number): boolean;
    Disconnect(): any;
    GetJobProgress(jobID: number): UnityEditor.Collaboration.ProgressInfo;
    CancelJob(jobID: number): any;
    Publish(comment: string): any;
    Update(revisionID: string, updateToRevision: boolean): any;
    RevertFile(path: string, forceOverwrite: boolean): any;
    GetCollabConflicts(): UnityEditor.Collaboration.Change[];
    SetConflictResolvedMine(path: string): boolean;
    SetConflictsResolvedMine(paths: string[]): boolean;
    SetConflictResolvedTheirs(path: string): boolean;
    SetConflictsResolvedTheirs(paths: string[]): boolean;
    ClearConflictResolved(path: string): boolean;
    ClearConflictsResolved(paths: string[]): boolean;
    LaunchConflictExternalMerge(path: string): any;
    ShowConflictDifferences(path: string): any;
    ShowDifferences(path: string): any;
    GetChangesToPublish(): UnityEditor.Collaboration.Change[];
    ResyncSnapshot(): any;
    GoBackToRevision(revisionID: string, updateToRevision: boolean): any;
    SendNotification(): any;
    ResyncToRevision(revisionID: string): any;
    ClearErrors(): any;
    SetCollabEnabledForCurrentProject(enabled: boolean): any;
    OnPostprocessAssetbundleNameChanged(assetPath: string, previousAssetBundleName: string, newAssetBundleName: string): any;
    GetSoftLocks(assetGuid: string): UnityEditor.Collaboration.SoftLock[];
    WasWhitelistedRequestSent(): boolean;
    GetRevisions(): UnityEditor.Collaboration.Revision[];
    static GetProjectClientType(): string;
    static TestGetRevisions(): any;
    CancelJobWithoutException(jobId: number): any;
    GetAssetState(guid: string): UnityEditor.Collaboration.Collab.CollabStates;
    GetSelectedAssetState(): UnityEditor.Collaboration.Collab.CollabStates;
    UpdateEditorSelectionCache(): any;
    GetCollabInfo(): UnityEditor.Collaboration.CollabInfo;
    static IsDiffToolsAvailable(): boolean;
    SaveAssets(): any;
    static SwitchToDefaultMode(): any;
    LogWarning(warning: string): any;
    LogWarning(warning: string, context: any): any;
    LogError(warning: string): any;
    LogError(warning: string, context: any): any;
    GetVersion(): number;
    GetPostprocessOrder(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly collabInfo: UnityEditor.Collaboration.CollabInfo;
    projectBrowserSingleSelectionPath: string;
    projectBrowserSingleMetaSelectionPath: string;
    static readonly instance: UnityEditor.Collaboration.Collab;
    assetPath: string;
    readonly assetImporter: UnityEditor.AssetImporter;
    preview: any;
    // fields
    currentProjectBrowserSelection: string[];
    static clientType: string[];
  }
}
