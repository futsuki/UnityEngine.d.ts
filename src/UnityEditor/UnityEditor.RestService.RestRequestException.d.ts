declare namespace UnityEditor.RestService {
  class RestRequestException {
    // constructors
    constructor();
    constructor(httpStatusCode: UnityEditor.RestService.HttpStatusCode, restErrorString: string);
    constructor(httpStatusCode: UnityEditor.RestService.HttpStatusCode, restErrorString: string, restErrorDescription: string);
    // methods
    GetBaseException(): any;
    GetObjectData(info: any, context: any): any;
    ToString(): string;
    GetType(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    RestErrorString: string;
    HttpStatusCode: UnityEditor.RestService.HttpStatusCode;
    RestErrorDescription: string;
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
