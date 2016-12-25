declare namespace UnityEditor.Scripting.Compilers {
  class GendarmeRuleData {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    LastIndex: number;
    Line: number;
    File: string;
    Problem: string;
    Details: string;
    Severity: string;
    Source: string;
    Location: string;
    Target: string;
    IsAssemblyError: boolean;
  }
}
