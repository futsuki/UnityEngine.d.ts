declare namespace UnityEditor.Scripting.Compilers {
  class CompilerOutputParserBase extends System.Object {
    // constructors
    protected constructor();
    // methods
    Parse(errorOutput: string[], compilationHadFailure: boolean): any;
    Parse(errorOutput: string[], standardOutput: string[], compilationHadFailure: boolean): any;
    // properties
    // fields
  }
}
