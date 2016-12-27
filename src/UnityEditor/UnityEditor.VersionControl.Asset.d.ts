declare namespace UnityEditor.VersionControl {
  class Asset extends System.Object {
    // constructors
    constructor(clientPath: string);
    // methods
    Dispose(): void;
    IsChildOf(other: UnityEditor.VersionControl.Asset): boolean;
    IsState(state: UnityEditor.VersionControl.Asset.States): boolean;
    IsOneOfStates(states: UnityEditor.VersionControl.Asset.States[]): boolean;
    Edit(): void;
    Load(): UnityEngine.Object;
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
