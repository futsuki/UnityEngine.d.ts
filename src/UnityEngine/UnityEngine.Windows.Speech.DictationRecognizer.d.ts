declare namespace UnityEngine.Windows.Speech {
  class DictationRecognizer extends System.Object {
    // constructors
    constructor();
    constructor(confidenceLevel: UnityEngine.Windows.Speech.ConfidenceLevel);
    constructor(topic: UnityEngine.Windows.Speech.DictationTopicConstraint);
    constructor(minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel, topic: UnityEngine.Windows.Speech.DictationTopicConstraint);
    // methods
    Start(): void;
    Stop(): void;
    Dispose(): void;
    // properties
    readonly Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
    AutoSilenceTimeoutSeconds: number;
    InitialSilenceTimeoutSeconds: number;
    // fields
  }
}
