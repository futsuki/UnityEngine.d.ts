declare namespace UnityEngine {
  class JsonUtility {
    // constructors
    private constructor();
    // methods
    static ToJson(obj: any): string;
    static ToJson(obj: any, prettyPrint: boolean): string;
    static FromJson(json: string, type: any): any;
    static FromJsonOverwrite(json: string, objectToOverwrite: any): any;
    // properties
    // fields
  }
}
