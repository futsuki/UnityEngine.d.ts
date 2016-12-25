declare namespace UnityEditor {
  class Changeset {
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
    message: string;
    date: string;
    owner: string;
    items: UnityEditor.ChangesetItem[];
  }
}
