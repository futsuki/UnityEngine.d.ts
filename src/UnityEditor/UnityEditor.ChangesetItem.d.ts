declare namespace UnityEditor {
  class ChangesetItem {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    fullPath: string;
    guid: string;
    assetOperations: string;
    assetIsDir: number;
    changeFlags: UnityEditor.ChangeFlags;
  }
}
