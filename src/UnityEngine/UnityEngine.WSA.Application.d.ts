declare namespace UnityEngine.WSA {
  class Application extends System.Object {
    // constructors
    constructor();
    // methods
    static InvokeOnAppThread(item: (() => void), waitUntilDone: boolean): void;
    static InvokeOnUIThread(item: (() => void), waitUntilDone: boolean): void;
    static TryInvokeOnAppThread(item: (() => void), waitUntilDone: boolean): boolean;
    static TryInvokeOnUIThread(item: (() => void), waitUntilDone: boolean): boolean;
    static RunningOnAppThread(): boolean;
    static RunningOnUIThread(): boolean;
    // properties
    static readonly "arguments": string;
    static readonly advertisingIdentifier: string;
    // fields
  }
}
