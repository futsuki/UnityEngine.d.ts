declare namespace UnityEngine.Windows.Speech {
  class GrammarRecognizer {
    // constructors
    constructor(grammarFilePath: string);
    constructor(grammarFilePath: string, minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel);
    // methods
    Start(): void;
    Stop(): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly GrammarFilePath: string;
    readonly IsRunning: boolean;
    // fields
  }
}
