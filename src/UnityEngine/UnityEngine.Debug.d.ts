declare namespace UnityEngine {
  class Debug {
    // constructors
    constructor();
    // methods
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): void;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): void;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color): void;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): void;
    static Break(): void;
    static DebugBreak(): void;
    static Log(message: any): void;
    static Log(message: any, context: UnityEngine.Object): void;
    static LogFormat(format: string, args: any[]): void;
    static LogFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static LogError(message: any): void;
    static LogError(message: any, context: UnityEngine.Object): void;
    static LogErrorFormat(format: string, args: any[]): void;
    static LogErrorFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static ClearDeveloperConsole(): void;
    static LogException(exception: any): void;
    static LogException(exception: any, context: UnityEngine.Object): void;
    static LogWarning(message: any): void;
    static LogWarning(message: any, context: UnityEngine.Object): void;
    static LogWarningFormat(format: string, args: any[]): void;
    static LogWarningFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static Assert(condition: boolean): void;
    static Assert(condition: boolean, context: UnityEngine.Object): void;
    static Assert(condition: boolean, message: any): void;
    static Assert(condition: boolean, message: string): void;
    static Assert(condition: boolean, message: any, context: UnityEngine.Object): void;
    static Assert(condition: boolean, message: string, context: UnityEngine.Object): void;
    static AssertFormat(condition: boolean, format: string, args: any[]): void;
    static AssertFormat(condition: boolean, context: UnityEngine.Object, format: string, args: any[]): void;
    static LogAssertion(message: any): void;
    static LogAssertion(message: any, context: UnityEngine.Object): void;
    static LogAssertionFormat(format: string, args: any[]): void;
    static LogAssertionFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static Assert(condition: boolean, format: string, args: any[]): void;
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
