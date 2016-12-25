declare namespace UnityEngine.Scripting {
  class UsedByNativeCodeAttribute {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    Name: string;
    readonly TypeId: any;
    // fields
  }
}
