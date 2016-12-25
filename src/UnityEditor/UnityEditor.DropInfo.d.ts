declare namespace UnityEditor {
  class DropInfo {
    // constructors
    constructor(source: UnityEditor.IDropArea);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    dropArea: UnityEditor.IDropArea;
    userData: any;
    type: UnityEditor.DropInfo.Type;
    rect: any;
  }
}
