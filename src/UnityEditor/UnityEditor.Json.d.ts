declare namespace UnityEditor {
  class Json {
    // constructors
    private constructor();
    // methods
    static Deserialize(json: string): any;
    static Serialize(obj: any): string;
    // properties
    // fields
  }
}
