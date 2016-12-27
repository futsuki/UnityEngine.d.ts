declare namespace UnityEditor {
  class EditorJsonUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static ToJson(obj: any): string;
    static ToJson(obj: any, prettyPrint: boolean): string;
    static FromJsonOverwrite(json: string, objectToOverwrite: any): void;
    // properties
    // fields
  }
}
