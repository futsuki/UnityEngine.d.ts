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
    AddBuiltinSizes(sizes: UnityEditor.GameViewSize[]): any;
    AddBuiltinSize(size: UnityEditor.GameViewSize): any;
    AddCustomSizes(sizes: UnityEditor.GameViewSize[]): any;
    AddCustomSize(size: UnityEditor.GameViewSize): any;
    RemoveCustomSize(index: number): any;
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
