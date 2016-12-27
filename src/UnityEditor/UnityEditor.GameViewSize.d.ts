declare namespace UnityEditor {
  class GameViewSize extends System.Object {
    // constructors
    constructor(type: UnityEditor.GameViewSizeType, width: number, height: number, baseText: string);
    constructor(other: UnityEditor.GameViewSize);
    // methods
    Set(other: UnityEditor.GameViewSize): void;
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
