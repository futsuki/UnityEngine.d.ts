declare namespace UnityEngine.Windows.Speech.DictationRecognizer {
  class DictationResultDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(text: string, confidence: UnityEngine.Windows.Speech.ConfidenceLevel): void;
    BeginInvoke(text: string, confidence: UnityEngine.Windows.Speech.ConfidenceLevel, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
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
