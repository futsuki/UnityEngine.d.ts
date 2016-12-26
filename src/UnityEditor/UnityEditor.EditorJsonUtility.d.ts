declare namespace UnityEditor {
  class EditorJsonUtility {
    // constructors
    private constructor();
    // methods
    static ToJson(obj: any): string;
    static ToJson(obj: any, prettyPrint: boolean): string;
    static FromJsonOverwrite(json: string, objectToOverwrite: any): void;
    // properties
    // fields
  }
}
