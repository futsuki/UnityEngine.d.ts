declare namespace UnityEngineInternal {
  class TypeInferenceRules {
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
    static TypeReferencedByFirstArgument: UnityEngineInternal.TypeInferenceRules;
    static TypeReferencedBySecondArgument: UnityEngineInternal.TypeInferenceRules;
    static ArrayOfTypeReferencedByFirstArgument: UnityEngineInternal.TypeInferenceRules;
    static TypeOfFirstArgument: UnityEngineInternal.TypeInferenceRules;
  }
}
