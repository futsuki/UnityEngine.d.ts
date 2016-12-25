declare namespace UnityEngine.WSA {
  class Application {
    // constructors
    constructor();
    // methods
    static InvokeOnAppThread(item: UnityEngine.WSA.AppCallbackItem, waitUntilDone: boolean): any;
    static InvokeOnUIThread(item: UnityEngine.WSA.AppCallbackItem, waitUntilDone: boolean): any;
    static TryInvokeOnAppThread(item: UnityEngine.WSA.AppCallbackItem, waitUntilDone: boolean): boolean;
    static TryInvokeOnUIThread(item: UnityEngine.WSA.AppCallbackItem, waitUntilDone: boolean): boolean;
    static RunningOnAppThread(): boolean;
    static RunningOnUIThread(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly "arguments": string;
    static readonly advertisingIdentifier: string;
    // fields
  }
}
