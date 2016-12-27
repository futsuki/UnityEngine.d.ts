declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognizedEventArgs extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    confidence: UnityEngine.Windows.Speech.ConfidenceLevel;
    semanticMeanings: UnityEngine.Windows.Speech.SemanticMeaning[];
    text: string;
    phraseStartTime: any;
    phraseDuration: any;
  }
}
