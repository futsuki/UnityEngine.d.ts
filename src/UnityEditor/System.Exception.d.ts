declare namespace System {
  class Exception extends System.Object {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    GetBaseException(): System.Exception;
    GetObjectData(info: any, context: any): void;
    ToString(): string;
    GetType(): any;
    GetType(): any;
    // properties
    readonly InnerException: System.Exception;
    HelpLink: string;
    readonly Message: string;
    Source: string;
    readonly StackTrace: string;
    readonly TargetSite: any;
    readonly Data: any;
    // fields
  }
}
