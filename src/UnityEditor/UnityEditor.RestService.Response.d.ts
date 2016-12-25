declare namespace UnityEditor.RestService {
  class Response {
    // constructors
    constructor();
    // methods
    SimpleResponse(status: UnityEditor.RestService.HttpStatusCode, payload: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
