declare namespace UnityEditor.VersionControl {
  class Task extends System.Object {
    // constructors
    protected constructor();
    // methods
    Wait(): void;
    SetCompletionAction(action: UnityEditor.VersionControl.CompletionAction): void;
    Dispose(): void;
    // properties
    userIdentifier: number;
    readonly text: string;
    readonly description: string;
    readonly success: boolean;
    readonly secondsSpent: number;
    readonly progressPct: number;
    readonly progressMessage: string;
    readonly resultCode: number;
    readonly messages: UnityEditor.VersionControl.Message[];
    readonly assetList: UnityEditor.VersionControl.AssetList;
    readonly changeSets: UnityEditor.VersionControl.ChangeSets;
    // fields
  }
}
