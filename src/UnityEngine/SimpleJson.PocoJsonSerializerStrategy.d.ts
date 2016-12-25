declare namespace SimpleJson {
  class PocoJsonSerializerStrategy {
    // constructors
    constructor();
    // methods
    TrySerializeNonPrimitiveObject(input: any, output: any): boolean;
    DeserializeObject(value: any, type: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
