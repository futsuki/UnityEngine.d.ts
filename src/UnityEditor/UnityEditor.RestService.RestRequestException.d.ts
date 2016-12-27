declare namespace UnityEditor.RestService {
  class RestRequestException extends System.Exception {
    // constructors
    constructor();
    constructor(httpStatusCode: UnityEditor.RestService.HttpStatusCode, restErrorString: string);
    constructor(httpStatusCode: UnityEditor.RestService.HttpStatusCode, restErrorString: string, restErrorDescription: string);
    // methods
    // properties
    RestErrorString: string;
    HttpStatusCode: UnityEditor.RestService.HttpStatusCode;
    RestErrorDescription: string;
    // fields
  }
}
