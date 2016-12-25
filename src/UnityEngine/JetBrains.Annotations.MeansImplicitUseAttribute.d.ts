declare namespace JetBrains.Annotations {
  class MeansImplicitUseAttribute {
    // constructors
    constructor();
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags);
    constructor(targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags, targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly UseKindFlags: JetBrains.Annotations.ImplicitUseKindFlags;
    readonly TargetFlags: JetBrains.Annotations.ImplicitUseTargetFlags;
    readonly TypeId: any;
    // fields
  }
}
