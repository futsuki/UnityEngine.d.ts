declare namespace UnityEditor {
  class DeletedAsset {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    changeset: number;
    guid: string;
    parent: string;
    name: string;
    fullPath: string;
    date: string;
    assetIsDir: number;
  }
}
