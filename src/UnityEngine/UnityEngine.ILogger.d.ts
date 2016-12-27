declare namespace UnityEngine {
  class ILogger {
    // constructors
    protected constructor();
    // methods
    IsLogTypeAllowed(logType: UnityEngine.LogType): boolean;
    Log(logType: UnityEngine.LogType, message: any): void;
    Log(logType: UnityEngine.LogType, message: any, context: UnityEngine.Object): void;
    Log(logType: UnityEngine.LogType, tag: string, message: any): void;
    Log(logType: UnityEngine.LogType, tag: string, message: any, context: UnityEngine.Object): void;
    Log(message: any): void;
    Log(tag: string, message: any): void;
    Log(tag: string, message: any, context: UnityEngine.Object): void;
    LogWarning(tag: string, message: any): void;
    LogWarning(tag: string, message: any, context: UnityEngine.Object): void;
    LogError(tag: string, message: any): void;
    LogError(tag: string, message: any, context: UnityEngine.Object): void;
    LogFormat(logType: UnityEngine.LogType, format: string, args: any[]): void;
    LogException(exception: System.Exception): void;
    // properties
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    // fields
  }
}
