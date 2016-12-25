declare namespace UnityEngine.Serialization {
  class FormerlySerializedAsAttribute {
    // constructors
    constructor(oldName: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly oldName: string;
    readonly TypeId: any;
    // fields
  }
}
