declare namespace UnityEngine {
  class JsonUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static ToJson(obj: any): string;
    static ToJson(obj: any, prettyPrint: boolean): string;
    static FromJson(json: string, type: any): any;
    static FromJsonOverwrite(json: string, objectToOverwrite: any): void;
    // properties
    // fields
  }
}
