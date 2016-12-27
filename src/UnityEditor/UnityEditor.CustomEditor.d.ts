declare namespace UnityEditor {
  class CustomEditor extends System.Attribute {
    // constructors
    constructor(inspectedType: any);
    constructor(inspectedType: any, editorForChildClasses: boolean);
    // methods
    // properties
    isFallback: boolean;
    // fields
  }
}
