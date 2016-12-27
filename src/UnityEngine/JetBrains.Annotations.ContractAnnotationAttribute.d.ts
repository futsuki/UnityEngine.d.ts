declare namespace JetBrains.Annotations {
  class ContractAnnotationAttribute extends System.Attribute {
    // constructors
    constructor(contract: string);
    constructor(contract: string, forceFullStates: boolean);
    // methods
    // properties
    readonly Contract: string;
    readonly ForceFullStates: boolean;
    // fields
  }
}
