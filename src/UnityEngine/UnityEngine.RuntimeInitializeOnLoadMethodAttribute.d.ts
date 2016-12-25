declare namespace UnityEngine {
  class RuntimeInitializeOnLoadMethodAttribute {
    // constructors
    constructor();
    constructor(loadType: UnityEngine.RuntimeInitializeLoadType);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly loadType: UnityEngine.RuntimeInitializeLoadType;
    readonly TypeId: any;
    // fields
  }
}
