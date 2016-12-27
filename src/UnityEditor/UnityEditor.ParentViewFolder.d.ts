declare namespace UnityEditor {
  class ParentViewFolder extends System.Object {
    // constructors
    constructor(name: string, guid: string);
    constructor(name: string, guid: string, flags: UnityEditor.ChangeFlags);
    // methods
    static MakeNiceName(name: string): string;
    CloneWithoutFiles(): UnityEditor.ParentViewFolder;
    // properties
    // fields
    guid: string;
    name: string;
    changeFlags: UnityEditor.ChangeFlags;
    files: UnityEditor.ParentViewFile[];
  }
}
