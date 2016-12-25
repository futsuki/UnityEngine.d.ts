declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognizedEventArgs {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    confidence: UnityEngine.Windows.Speech.ConfidenceLevel;
    semanticMeanings: UnityEngine.Windows.Speech.SemanticMeaning[];
    text: string;
    phraseStartTime: any;
    phraseDuration: any;
  }
}
