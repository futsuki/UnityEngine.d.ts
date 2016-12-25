declare namespace UnityEditor.RestService {
  class Request {
    // constructors
    constructor();
    // methods
    GetParam(paramName: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Payload: string;
    readonly Url: string;
    readonly MessageType: number;
    readonly Depth: number;
    readonly Info: boolean;
    // fields
  }
}
