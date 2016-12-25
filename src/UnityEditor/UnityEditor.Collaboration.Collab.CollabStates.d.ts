declare namespace UnityEditor.Collaboration.Collab {
  class CollabStates {
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
    static kCollabNone: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabLocal: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabSynced: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabOutOfSync: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabMissing: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabCheckedOutLocal: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabCheckedOutRemote: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabDeletedLocal: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabDeletedRemote: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabAddedLocal: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabAddedRemote: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabConflicted: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabMovedLocal: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabMovedRemote: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabUpdating: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabReadOnly: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabMetaFile: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabUseMine: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabUseTheir: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabChanges: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabMerged: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabPendingMerge: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabFolderMetaFile: UnityEditor.Collaboration.Collab.CollabStates;
    static kCollabInvalidState: UnityEditor.Collaboration.Collab.CollabStates;
  }
}
