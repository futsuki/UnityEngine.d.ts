declare namespace UnityEditor.Collaboration {
  class Change extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly path: string;
    readonly state: number;
    readonly isRevertable: boolean;
    readonly revertableState: number;
    readonly relatedTo: string;
    readonly isMeta: boolean;
    readonly isConflict: boolean;
    readonly isFolderMeta: boolean;
    readonly isResolved: boolean;
    readonly localStatus: string;
    readonly remoteStatus: string;
    readonly resolveStatus: string;
    // fields
  }
}
