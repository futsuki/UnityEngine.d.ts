declare namespace UnityEngine.Serialization {
  class ListSerializationSurrogate {
    // constructors
    constructor();
    // methods
    GetObjectData(obj: any, info: any, context: any): void;
    SetObjectData(obj: any, info: any, context: any, selector: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static Default: any;
  }
}
