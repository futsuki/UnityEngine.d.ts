declare namespace UnityEngine {
  class DebugLogHandler {
    // constructors
    constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: any, context: UnityEngine.Object): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
