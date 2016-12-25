declare namespace UnityEngine.Windows.Speech {
  class KeywordRecognizer {
    // constructors
    constructor(keywords: string[]);
    constructor(keywords: string[], minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel);
    // methods
    Start(): any;
    Stop(): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Keywords: any;
    readonly IsRunning: boolean;
    // fields
  }
}
