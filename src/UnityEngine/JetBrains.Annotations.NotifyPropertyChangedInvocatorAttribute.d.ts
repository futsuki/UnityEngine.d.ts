declare namespace JetBrains.Annotations {
  class NotifyPropertyChangedInvocatorAttribute {
    // constructors
    constructor();
    constructor(parameterName: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ParameterName: string;
    readonly TypeId: any;
    // fields
  }
}
