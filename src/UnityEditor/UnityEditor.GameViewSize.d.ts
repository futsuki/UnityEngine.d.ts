declare namespace UnityEditor {
  class GameViewSize {
    // constructors
    constructor(type: UnityEditor.GameViewSizeType, width: number, height: number, baseText: string);
    constructor(other: UnityEditor.GameViewSize);
    // methods
    Set(other: UnityEditor.GameViewSize): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    baseText: string;
    sizeType: UnityEditor.GameViewSizeType;
    width: number;
    height: number;
    readonly isFreeAspectRatio: boolean;
    readonly aspectRatio: number;
    readonly displayText: string;
    // fields
  }
}
