declare namespace UnityEngine.Serialization {
  class UnitySurrogateSelector {
    // constructors
    constructor();
    // methods
    GetSurrogate(type: any, context: any, selector: any): any;
    ChainSelector(selector: any): any;
    GetNextSelector(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
