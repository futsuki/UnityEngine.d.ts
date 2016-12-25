declare namespace UnityEngine.Windows.Speech.PhraseRecognitionSystem {
  class StatusDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(status: UnityEngine.Windows.Speech.SpeechSystemStatus): any;
    BeginInvoke(status: UnityEngine.Windows.Speech.SpeechSystemStatus, callback: any, object: any): any;
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
