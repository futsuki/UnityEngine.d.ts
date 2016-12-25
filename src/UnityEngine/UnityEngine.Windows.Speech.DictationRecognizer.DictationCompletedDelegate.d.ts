declare namespace UnityEngine.Windows.Speech.DictationRecognizer {
  class DictationCompletedDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(cause: UnityEngine.Windows.Speech.DictationCompletionCause): any;
    BeginInvoke(cause: UnityEngine.Windows.Speech.DictationCompletionCause, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
