declare namespace UnityEditor {
  class ParentViewFolder {
    // constructors
    constructor(name: string, guid: string);
    constructor(name: string, guid: string, flags: UnityEditor.ChangeFlags);
    // methods
    static MakeNiceName(name: string): string;
    CloneWithoutFiles(): UnityEditor.ParentViewFolder;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    guid: string;
    name: string;
    changeFlags: UnityEditor.ChangeFlags;
    files: UnityEditor.ParentViewFile[];
  }
}
