declare namespace UnityEditor.PlayerSettings {
  class WebGL {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static memorySize: number;
    static exceptionSupport: UnityEditor.WebGLExceptionSupport;
    static dataCaching: boolean;
    static emscriptenArgs: string;
    static modulesDirectory: string;
    static template: string;
    static analyzeBuildSize: boolean;
    static useEmbeddedResources: boolean;
    static useWasm: boolean;
    static compressionFormat: UnityEditor.WebGLCompressionFormat;
    static debugSymbols: boolean;
    // fields
  }
}
