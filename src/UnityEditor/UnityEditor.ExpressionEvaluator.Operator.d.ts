declare namespace UnityEditor.ExpressionEvaluator {
  class Operator {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    character: any;
    presedence: number;
    associativity: UnityEditor.ExpressionEvaluator.Associativity;
    inputs: number;
  }
}
