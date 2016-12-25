declare namespace JetBrains.Annotations {
  class ImplicitUseKindFlags {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Default: JetBrains.Annotations.ImplicitUseKindFlags;
    static Access: JetBrains.Annotations.ImplicitUseKindFlags;
    static Assign: JetBrains.Annotations.ImplicitUseKindFlags;
    static InstantiatedWithFixedConstructorSignature: JetBrains.Annotations.ImplicitUseKindFlags;
    static InstantiatedNoFixedConstructorSignature: JetBrains.Annotations.ImplicitUseKindFlags;
  }
}
