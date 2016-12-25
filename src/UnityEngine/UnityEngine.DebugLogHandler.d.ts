declare namespace UnityEngine {
  class DebugLogHandler {
    // constructors
    constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): any;
    LogException(exception: any, context: UnityEngine.Object): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
