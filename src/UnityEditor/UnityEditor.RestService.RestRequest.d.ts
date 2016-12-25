declare namespace UnityEditor.RestService {
  class RestRequest {
    // constructors
    constructor();
    // methods
    static Send(endpoint: string, payload: string, timeout: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
