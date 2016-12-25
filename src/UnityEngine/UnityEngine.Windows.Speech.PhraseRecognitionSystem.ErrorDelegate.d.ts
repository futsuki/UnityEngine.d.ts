declare namespace UnityEngine.Windows.Speech.PhraseRecognitionSystem {
  class ErrorDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(errorCode: UnityEngine.Windows.Speech.SpeechError): any;
    BeginInvoke(errorCode: UnityEngine.Windows.Speech.SpeechError, callback: any, object: any): any;
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
