declare namespace UnityEditor.VersionControl {
  class Task {
    // constructors
    private constructor();
    // methods
    Wait(): void;
    SetCompletionAction(action: UnityEditor.VersionControl.CompletionAction): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
