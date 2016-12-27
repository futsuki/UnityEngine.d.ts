declare namespace UnityEditor.RestService {
  class Request extends System.Object {
    // constructors
    constructor();
    // methods
    GetParam(paramName: string): string;
    // properties
    readonly Payload: string;
    readonly Url: string;
    readonly MessageType: number;
    readonly Depth: number;
    readonly Info: boolean;
    // fields
  }
}
