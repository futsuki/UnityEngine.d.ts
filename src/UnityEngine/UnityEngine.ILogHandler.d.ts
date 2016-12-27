declare namespace UnityEngine {
  class ILogHandler {
    // constructors
    protected constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: System.Exception, context: UnityEngine.Object): void;
    // properties
    // fields
  }
}
