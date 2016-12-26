declare namespace UnityEditor.Collaboration {
  class Change {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
