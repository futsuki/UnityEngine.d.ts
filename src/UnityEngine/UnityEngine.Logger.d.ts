declare namespace UnityEngine {
  class Logger {
    // constructors
    constructor(logHandler: UnityEngine.ILogHandler);
    // methods
    IsLogTypeAllowed(logType: UnityEngine.LogType): boolean;
    Log(logType: UnityEngine.LogType, message: any): any;
    Log(logType: UnityEngine.LogType, message: any, context: UnityEngine.Object): any;
    Log(logType: UnityEngine.LogType, tag: string, message: any): any;
    Log(logType: UnityEngine.LogType, tag: string, message: any, context: UnityEngine.Object): any;
    Log(message: any): any;
    Log(tag: string, message: any): any;
    Log(tag: string, message: any, context: UnityEngine.Object): any;
    LogWarning(tag: string, message: any): any;
    LogWarning(tag: string, message: any, context: UnityEngine.Object): any;
    LogError(tag: string, message: any): any;
    LogError(tag: string, message: any, context: UnityEngine.Object): any;
    LogFormat(logType: UnityEngine.LogType, format: string, args: any[]): any;
    LogException(exception: any): any;
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): any;
    LogException(exception: any, context: UnityEngine.Object): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    // fields
  }
}
