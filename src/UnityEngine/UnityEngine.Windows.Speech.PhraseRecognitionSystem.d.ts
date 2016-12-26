declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognitionSystem {
    // constructors
    private constructor();
    // methods
    static Restart(): void;
    static Shutdown(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isSupported: boolean;
    static readonly Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
    // fields
  }
}
