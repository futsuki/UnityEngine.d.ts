declare namespace UnityEngine.Windows.Speech {
  class DictationRecognizer {
    // constructors
    constructor();
    constructor(confidenceLevel: UnityEngine.Windows.Speech.ConfidenceLevel);
    constructor(topic: UnityEngine.Windows.Speech.DictationTopicConstraint);
    constructor(minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel, topic: UnityEngine.Windows.Speech.DictationTopicConstraint);
    // methods
    Start(): any;
    Stop(): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
    AutoSilenceTimeoutSeconds: number;
    InitialSilenceTimeoutSeconds: number;
    // fields
  }
}
