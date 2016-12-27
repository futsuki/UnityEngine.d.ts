declare namespace UnityEngine.Windows.Speech {
  class GrammarRecognizer extends UnityEngine.Windows.Speech.PhraseRecognizer {
    // constructors
    constructor(grammarFilePath: string);
    constructor(grammarFilePath: string, minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel);
    // methods
    // properties
    readonly GrammarFilePath: string;
    // fields
  }
}
