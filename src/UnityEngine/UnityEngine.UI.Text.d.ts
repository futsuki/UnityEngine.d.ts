declare namespace UnityEngine.UI {
  class Text extends UnityEngine.UI.MaskableGraphic {
    // constructors
    protected constructor();
    // methods
    FontTextureChanged(): void;
    GetGenerationSettings(extents: UnityEngine.Vector2): UnityEngine.TextGenerationSettings;
    static GetTextAnchorPivot(anchor: UnityEngine.TextAnchor): UnityEngine.Vector2;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    OnRebuildRequested(): void;
    // properties
    readonly cachedTextGenerator: UnityEngine.TextGenerator;
    readonly cachedTextGeneratorForLayout: UnityEngine.TextGenerator;
    readonly mainTexture: UnityEngine.Texture;
    font: UnityEngine.Font;
    text: string;
    supportRichText: boolean;
    resizeTextForBestFit: boolean;
    resizeTextMinSize: number;
    resizeTextMaxSize: number;
    alignment: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    fontSize: number;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    lineSpacing: number;
    fontStyle: UnityEngine.FontStyle;
    readonly pixelsPerUnit: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
