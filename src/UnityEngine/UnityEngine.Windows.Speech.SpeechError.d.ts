declare namespace UnityEngine.Windows.Speech {
  class SpeechError {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
