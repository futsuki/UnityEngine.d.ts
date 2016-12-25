declare namespace UnityEditor.VersionControl {
  class ChangeSet {
    // constructors
    constructor();
    constructor(description: string);
    constructor(description: string, revision: string);
    constructor(other: UnityEditor.VersionControl.ChangeSet);
    // methods
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly description: string;
    readonly id: string;
    // fields
    static defaultID: string;
  }
}
