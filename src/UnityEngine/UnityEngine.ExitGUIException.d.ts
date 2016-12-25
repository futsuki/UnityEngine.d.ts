declare namespace UnityEngine {
  class ExitGUIException {
    // constructors
    constructor();
    // methods
    GetBaseException(): any;
    GetObjectData(info: any, context: any): any;
    ToString(): string;
    GetType(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly InnerException: any;
    HelpLink: string;
    readonly Message: string;
    Source: string;
    readonly StackTrace: string;
    readonly TargetSite: any;
    readonly Data: any;
    // fields
  }
}