declare namespace UnityEditor.RestService {
  class Router {
    // constructors
    constructor();
    // methods
    static RegisterHandler(route: string, handler: UnityEditor.RestService.Handler): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
