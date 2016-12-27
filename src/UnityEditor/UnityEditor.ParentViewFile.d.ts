declare namespace UnityEditor {
  class ParentViewFile extends System.Object {
    // constructors
    constructor(name: string, guid: string);
    constructor(name: string, guid: string, flags: UnityEditor.ChangeFlags);
    // methods
    // properties
    // fields
    guid: string;
    name: string;
    changeFlags: UnityEditor.ChangeFlags;
  }
}
