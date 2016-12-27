declare namespace JetBrains.Annotations {
  class UsedImplicitlyAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags);
    constructor(targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags, targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    // methods
    // properties
    readonly UseKindFlags: JetBrains.Annotations.ImplicitUseKindFlags;
    readonly TargetFlags: JetBrains.Annotations.ImplicitUseTargetFlags;
    // fields
  }
}
