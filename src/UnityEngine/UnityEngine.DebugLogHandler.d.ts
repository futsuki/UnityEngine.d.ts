declare namespace UnityEngine {
  class DebugLogHandler extends System.Object {
    // constructors
    constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: System.Exception, context: UnityEngine.Object): void;
    // properties
    // fields
  }
}
