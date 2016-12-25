  class ValidationResult {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    Success: boolean;
    Rule: IValidationRule;
    CompilerMessages: any;
  }
