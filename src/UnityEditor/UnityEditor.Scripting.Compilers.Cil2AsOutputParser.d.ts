declare namespace UnityEditor.Scripting.Compilers {
  class Cil2AsOutputParser {
    // constructors
    constructor();
    // methods
    Parse(errorOutput: string[], standardOutput: string[], compilationHadFailure: boolean): any;
    Parse(errorOutput: string[], compilationHadFailure: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
