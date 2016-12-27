declare namespace UnityEditor.MonoCrossCompile {
  class JobCompileAOT extends System.Object {
    // constructors
    constructor(target: UnityEditor.BuildTarget, crossCompilerAbsolutePath: string, assembliesAbsoluteDirectory: string, crossCompileOptions: UnityEditor.CrossCompileOptions, input: string, output: string, additionalOptions: string);
    // methods
    ThreadPoolCallback(threadContext: any): void;
    // properties
    // fields
    m_input: string;
    m_output: string;
    m_additionalOptions: string;
    m_doneEvent: any;
    m_Exception: System.Exception;
  }
}
