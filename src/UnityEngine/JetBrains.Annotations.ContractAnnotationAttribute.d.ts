declare namespace JetBrains.Annotations {
  class ContractAnnotationAttribute {
    // constructors
    constructor(contract: string);
    constructor(contract: string, forceFullStates: boolean);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Contract: string;
    readonly ForceFullStates: boolean;
    readonly TypeId: any;
    // fields
  }
}
