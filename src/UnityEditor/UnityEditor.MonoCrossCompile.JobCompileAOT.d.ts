declare namespace UnityEditor.MonoCrossCompile {
  class JobCompileAOT {
    // constructors
    constructor(target: UnityEditor.BuildTarget, crossCompilerAbsolutePath: string, assembliesAbsoluteDirectory: string, crossCompileOptions: UnityEditor.CrossCompileOptions, input: string, output: string, additionalOptions: string);
    // methods
    ThreadPoolCallback(threadContext: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_input: string;
    m_output: string;
    m_additionalOptions: string;
    m_doneEvent: any;
    m_Exception: any;
  }
}
