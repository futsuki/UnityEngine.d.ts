declare namespace UnityEngine.Assertions {
  class AssertionException {
    // constructors
    constructor(message: string, userMessage: string);
    // methods
    GetBaseException(): any;
    GetObjectData(info: any, context: any): any;
    ToString(): string;
    GetType(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly Message: string;
    readonly InnerException: any;
    HelpLink: string;
    Source: string;
    readonly StackTrace: string;
    readonly TargetSite: any;
    readonly Data: any;
    // fields
  }
}
