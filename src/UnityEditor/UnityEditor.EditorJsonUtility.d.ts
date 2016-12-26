declare namespace UnityEditor {
  class EditorJsonUtility {
    // constructors
    private constructor();
    // methods
    static ToJson(obj: any): string;
    static ToJson(obj: any, prettyPrint: boolean): string;
    static FromJsonOverwrite(json: string, objectToOverwrite: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
