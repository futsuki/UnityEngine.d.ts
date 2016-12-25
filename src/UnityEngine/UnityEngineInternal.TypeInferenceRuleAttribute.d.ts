declare namespace UnityEngineInternal {
  class TypeInferenceRuleAttribute {
    // constructors
    constructor(rule: UnityEngineInternal.TypeInferenceRules);
    constructor(rule: string);
    // methods
    ToString(): string;
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    // properties
    readonly TypeId: any;
    // fields
  }
}
