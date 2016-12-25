declare namespace UnityEngine.TextEditor {
  class CharacterType {
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
    static LetterLike: UnityEngine.TextEditor.CharacterType;
    static Symbol: UnityEngine.TextEditor.CharacterType;
    static Symbol2: UnityEngine.TextEditor.CharacterType;
    static WhiteSpace: UnityEngine.TextEditor.CharacterType;
  }
}
