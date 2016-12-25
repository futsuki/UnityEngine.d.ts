declare namespace UnityEngine.Scripting.APIUpdating {
  class MovedFromAttribute {
    // constructors
    constructor(sourceNamespace: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Namespace: string;
    readonly TypeId: any;
    // fields
  }
}
