declare namespace UnityEngine.Windows.Speech {
  class DictationCompletionCause {
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
    static Complete: UnityEngine.Windows.Speech.DictationCompletionCause;
    static AudioQualityFailure: UnityEngine.Windows.Speech.DictationCompletionCause;
    static Canceled: UnityEngine.Windows.Speech.DictationCompletionCause;
    static TimeoutExceeded: UnityEngine.Windows.Speech.DictationCompletionCause;
    static PauseLimitExceeded: UnityEngine.Windows.Speech.DictationCompletionCause;
    static NetworkFailure: UnityEngine.Windows.Speech.DictationCompletionCause;
    static MicrophoneUnavailable: UnityEngine.Windows.Speech.DictationCompletionCause;
    static UnknownError: UnityEngine.Windows.Speech.DictationCompletionCause;
  }
}
