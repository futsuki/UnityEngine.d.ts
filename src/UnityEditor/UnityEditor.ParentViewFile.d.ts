declare namespace UnityEditor {
  class ParentViewFile {
    // constructors
    constructor(name: string, guid: string);
    constructor(name: string, guid: string, flags: UnityEditor.ChangeFlags);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    guid: string;
    name: string;
    changeFlags: UnityEditor.ChangeFlags;
  }
}
