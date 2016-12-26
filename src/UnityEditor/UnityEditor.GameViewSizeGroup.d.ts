declare namespace UnityEditor {
  class GameViewSizeGroup {
    // constructors
    constructor();
    // methods
    GetGameViewSize(index: number): UnityEditor.GameViewSize;
    GetDisplayTexts(): string[];
    GetTotalCount(): number;
    GetBuiltinCount(): number;
    GetCustomCount(): number;
    AddBuiltinSizes(sizes: UnityEditor.GameViewSize[]): void;
    AddBuiltinSize(size: UnityEditor.GameViewSize): void;
    AddCustomSizes(sizes: UnityEditor.GameViewSize[]): void;
    AddCustomSize(size: UnityEditor.GameViewSize): void;
    RemoveCustomSize(index: number): void;
    IsCustomSize(index: number): boolean;
    TotalIndexToCustomIndex(index: number): number;
    IndexOf(view: UnityEditor.GameViewSize): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
