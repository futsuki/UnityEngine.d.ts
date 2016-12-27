declare namespace UnityEngine {
  class TextGenerationSettings extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Equals(other: UnityEngine.TextGenerationSettings): boolean;
    Equals(obj: any): boolean;
    // properties
    // fields
    font: UnityEngine.Font;
    color: UnityEngine.Color;
    fontSize: number;
    lineSpacing: number;
    richText: boolean;
    scaleFactor: number;
    fontStyle: UnityEngine.FontStyle;
    textAnchor: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    resizeTextForBestFit: boolean;
    resizeTextMinSize: number;
    resizeTextMaxSize: number;
    updateBounds: boolean;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    generationExtents: UnityEngine.Vector2;
    pivot: UnityEngine.Vector2;
    generateOutOfBounds: boolean;
  }
}
