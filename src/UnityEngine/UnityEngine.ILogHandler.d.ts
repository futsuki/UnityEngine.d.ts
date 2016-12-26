declare namespace UnityEngine {
  class ILogHandler {
    // constructors
    private constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: any, context: UnityEngine.Object): void;
    // properties
    // fields
  }
}
