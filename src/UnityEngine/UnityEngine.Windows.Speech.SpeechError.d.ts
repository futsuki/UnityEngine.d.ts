declare namespace UnityEngine.Windows.Speech {
  class SpeechError extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NoError: UnityEngine.Windows.Speech.SpeechError;
    static TopicLanguageNotSupported: UnityEngine.Windows.Speech.SpeechError;
    static GrammarLanguageMismatch: UnityEngine.Windows.Speech.SpeechError;
    static GrammarCompilationFailure: UnityEngine.Windows.Speech.SpeechError;
    static AudioQualityFailure: UnityEngine.Windows.Speech.SpeechError;
    static PauseLimitExceeded: UnityEngine.Windows.Speech.SpeechError;
    static TimeoutExceeded: UnityEngine.Windows.Speech.SpeechError;
    static NetworkFailure: UnityEngine.Windows.Speech.SpeechError;
    static MicrophoneUnavailable: UnityEngine.Windows.Speech.SpeechError;
    static UnknownError: UnityEngine.Windows.Speech.SpeechError;
  }
}
