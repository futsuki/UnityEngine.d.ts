declare namespace UnityEditor.VersionControl {
  class ChangeSet extends System.Object {
    // constructors
    constructor();
    constructor(description: string);
    constructor(description: string, revision: string);
    constructor(other: UnityEditor.VersionControl.ChangeSet);
    // methods
    Dispose(): void;
    // properties
    readonly description: string;
    readonly id: string;
    // fields
    static defaultID: string;
  }
}
