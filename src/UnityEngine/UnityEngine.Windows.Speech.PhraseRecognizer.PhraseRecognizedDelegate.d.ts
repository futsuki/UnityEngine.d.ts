declare namespace UnityEngine.Windows.Speech.PhraseRecognizer {
  class PhraseRecognizedDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(args: UnityEngine.Windows.Speech.PhraseRecognizedEventArgs): any;
    BeginInvoke(args: UnityEngine.Windows.Speech.PhraseRecognizedEventArgs, callback: any, object: any): any;
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
