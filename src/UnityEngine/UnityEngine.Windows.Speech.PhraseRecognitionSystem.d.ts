declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognitionSystem extends System.Object {
    // constructors
    protected constructor();
    // methods
    static Restart(): void;
    static Shutdown(): void;
    // properties
    static readonly isSupported: boolean;
    static readonly Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
    // fields
  }
}
