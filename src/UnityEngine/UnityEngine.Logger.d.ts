declare namespace UnityEngine {
  class Logger extends System.Object {
    // constructors
    constructor(logHandler: UnityEngine.ILogHandler);
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
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: System.Exception): void;
    LogException(exception: System.Exception, context: UnityEngine.Object): void;
    // properties
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    // fields
  }
}
