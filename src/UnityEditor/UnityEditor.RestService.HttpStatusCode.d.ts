declare namespace UnityEditor.RestService {
  class HttpStatusCode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Ok: UnityEditor.RestService.HttpStatusCode;
    static Created: UnityEditor.RestService.HttpStatusCode;
    static Accepted: UnityEditor.RestService.HttpStatusCode;
    static NoContent: UnityEditor.RestService.HttpStatusCode;
    static BadRequest: UnityEditor.RestService.HttpStatusCode;
    static Forbidden: UnityEditor.RestService.HttpStatusCode;
    static NotFound: UnityEditor.RestService.HttpStatusCode;
    static MethodNotAllowed: UnityEditor.RestService.HttpStatusCode;
    static InternalServerError: UnityEditor.RestService.HttpStatusCode;
    static NotImplemented: UnityEditor.RestService.HttpStatusCode;
  }
}
