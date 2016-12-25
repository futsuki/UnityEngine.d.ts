declare namespace UnityEngine {
  class RequireComponent {
    // constructors
    constructor(requiredComponent: any);
    constructor(requiredComponent: any, requiredComponent2: any);
    constructor(requiredComponent: any, requiredComponent2: any, requiredComponent3: any);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly TypeId: any;
    // fields
    m_Type0: any;
    m_Type1: any;
    m_Type2: any;
  }
}
