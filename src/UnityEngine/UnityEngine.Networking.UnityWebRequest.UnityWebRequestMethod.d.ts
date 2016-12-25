declare namespace UnityEngine.Networking.UnityWebRequest {
  class UnityWebRequestMethod {
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
    static Get: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Post: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Put: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Head: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Custom: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
  }
}
