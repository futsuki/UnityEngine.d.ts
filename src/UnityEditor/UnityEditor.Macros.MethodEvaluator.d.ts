declare namespace UnityEditor.Macros {
  class MethodEvaluator {
    // constructors
    private constructor();
    // methods
    static Eval(assemblyFile: string, typeName: string, methodName: string, paramTypes: any[], args: any[]): any;
    static ExecuteExternalCode(parcel: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
