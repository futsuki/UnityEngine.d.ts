declare namespace UnityEditor.VersionControl {
  class CompletionAction {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static UpdatePendingWindow: UnityEditor.VersionControl.CompletionAction;
    static OnChangeContentsPendingWindow: UnityEditor.VersionControl.CompletionAction;
    static OnIncomingPendingWindow: UnityEditor.VersionControl.CompletionAction;
    static OnChangeSetsPendingWindow: UnityEditor.VersionControl.CompletionAction;
    static OnGotLatestPendingWindow: UnityEditor.VersionControl.CompletionAction;
    static OnSubmittedChangeWindow: UnityEditor.VersionControl.CompletionAction;
    static OnAddedChangeWindow: UnityEditor.VersionControl.CompletionAction;
    static OnCheckoutCompleted: UnityEditor.VersionControl.CompletionAction;
  }
}
