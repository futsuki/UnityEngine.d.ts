declare namespace UnityEngine {
  class TextGenerator extends System.Object {
    // constructors
    constructor();
    constructor(initialCapacity: number);
    // methods
    Invalidate(): void;
    GetCharacters(characters: UnityEngine.UICharInfo[]): void;
    GetLines(lines: UnityEngine.UILineInfo[]): void;
    GetVertices(vertices: UnityEngine.UIVertex[]): void;
    GetPreferredWidth(str: string, settings: UnityEngine.TextGenerationSettings): number;
    GetPreferredHeight(str: string, settings: UnityEngine.TextGenerationSettings): number;
    PopulateWithErrors(str: string, settings: UnityEngine.TextGenerationSettings, context: UnityEngine.GameObject): boolean;
    Populate(str: string, settings: UnityEngine.TextGenerationSettings): boolean;
    GetVerticesArray(): UnityEngine.UIVertex[];
    GetCharactersArray(): UnityEngine.UICharInfo[];
    GetLinesArray(): UnityEngine.UILineInfo[];
    // properties
    readonly verts: UnityEngine.UIVertex[];
    readonly characters: UnityEngine.UICharInfo[];
    readonly lines: UnityEngine.UILineInfo[];
    readonly rectExtents: UnityEngine.Rect;
    readonly vertexCount: number;
    readonly characterCount: number;
    readonly characterCountVisible: number;
    readonly lineCount: number;
    readonly fontSizeUsedForBestFit: number;
    // fields
  }
}
