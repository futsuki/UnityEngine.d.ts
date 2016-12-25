declare namespace UnityEngine {
  class Debug {
    // constructors
    constructor();
    // methods
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): any;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): any;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color): any;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3): any;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): any;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color): any;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3): any;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): any;
    static Break(): any;
    static DebugBreak(): any;
    static Log(message: any): any;
    static Log(message: any, context: UnityEngine.Object): any;
    static LogFormat(format: string, args: any[]): any;
    static LogFormat(context: UnityEngine.Object, format: string, args: any[]): any;
    static LogError(message: any): any;
    static LogError(message: any, context: UnityEngine.Object): any;
    static LogErrorFormat(format: string, args: any[]): any;
    static LogErrorFormat(context: UnityEngine.Object, format: string, args: any[]): any;
    static ClearDeveloperConsole(): any;
    static LogException(exception: any): any;
    static LogException(exception: any, context: UnityEngine.Object): any;
    static LogWarning(message: any): any;
    static LogWarning(message: any, context: UnityEngine.Object): any;
    static LogWarningFormat(format: string, args: any[]): any;
    static LogWarningFormat(context: UnityEngine.Object, format: string, args: any[]): any;
    static Assert(condition: boolean): any;
    static Assert(condition: boolean, context: UnityEngine.Object): any;
    static Assert(condition: boolean, message: any): any;
    static Assert(condition: boolean, message: string): any;
    static Assert(condition: boolean, message: any, context: UnityEngine.Object): any;
    static Assert(condition: boolean, message: string, context: UnityEngine.Object): any;
    static AssertFormat(condition: boolean, format: string, args: any[]): any;
    static AssertFormat(condition: boolean, context: UnityEngine.Object, format: string, args: any[]): any;
    static LogAssertion(message: any): any;
    static LogAssertion(message: any, context: UnityEngine.Object): any;
    static LogAssertionFormat(format: string, args: any[]): any;
    static LogAssertionFormat(context: UnityEngine.Object, format: string, args: any[]): any;
    static Assert(condition: boolean, format: string, args: any[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly logger: UnityEngine.ILogger;
    static developerConsoleVisible: boolean;
    static readonly isDebugBuild: boolean;
    // fields
  }
}
