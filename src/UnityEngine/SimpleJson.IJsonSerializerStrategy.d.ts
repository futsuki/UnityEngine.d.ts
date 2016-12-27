declare namespace SimpleJson {
  class IJsonSerializerStrategy {
    // constructors
    protected constructor();
    // methods
    TrySerializeNonPrimitiveObject(input: any, output: any): boolean;
    DeserializeObject(value: any, type: any): any;
    // properties
    // fields
  }
}
