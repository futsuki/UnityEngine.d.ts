declare namespace UnityEditor.VersionControl {
  class Asset {
    // constructors
    constructor(clientPath: string);
    // methods
    Dispose(): void;
    IsChildOf(other: UnityEditor.VersionControl.Asset): boolean;
    IsState(state: UnityEditor.VersionControl.Asset.States): boolean;
    IsOneOfStates(states: UnityEditor.VersionControl.Asset.States[]): boolean;
    Edit(): void;
    Load(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly state: UnityEditor.VersionControl.Asset.States;
    readonly path: string;
    readonly isFolder: boolean;
    readonly readOnly: boolean;
    readonly isMeta: boolean;
    readonly locked: boolean;
    readonly name: string;
    readonly fullName: string;
    readonly isInCurrentProject: boolean;
    readonly prettyPath: string;
    // fields
  }
}
