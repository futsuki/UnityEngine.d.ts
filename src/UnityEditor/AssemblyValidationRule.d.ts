  class AssemblyValidationRule {
    // constructors
    constructor(platform: any);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Platform: any;
    readonly TypeId: any;
    // fields
    Priority: number;
  }
