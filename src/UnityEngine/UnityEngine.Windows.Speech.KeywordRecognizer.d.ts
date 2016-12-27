declare namespace UnityEngine.Windows.Speech {
  class KeywordRecognizer extends UnityEngine.Windows.Speech.PhraseRecognizer {
    // constructors
    constructor(keywords: string[]);
    constructor(keywords: string[], minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel);
    // methods
    // properties
    readonly Keywords: any;
    // fields
  }
}
