declare namespace UnityEngine.Scripting {
  class RequiredByNativeCodeAttribute {
    // constructors
    constructor();
    constructor(name: string);
    constructor(optional: boolean);
    constructor(name: string, optional: boolean);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    Name: string;
    Optional: boolean;
    readonly TypeId: any;
    // fields
  }
}
