declare namespace UnityEngine {
  class TextGenerator {
    // constructors
    constructor();
    constructor(initialCapacity: number);
    // methods
    Invalidate(): void;
    GetCharacters(characters: any): void;
    GetLines(lines: any): void;
    GetVertices(vertices: any): void;
    GetPreferredWidth(str: string, settings: UnityEngine.TextGenerationSettings): number;
    GetPreferredHeight(str: string, settings: UnityEngine.TextGenerationSettings): number;
    PopulateWithErrors(str: string, settings: UnityEngine.TextGenerationSettings, context: UnityEngine.GameObject): boolean;
    Populate(str: string, settings: UnityEngine.TextGenerationSettings): boolean;
    GetVerticesArray(): UnityEngine.UIVertex[];
    GetCharactersArray(): UnityEngine.UICharInfo[];
    GetLinesArray(): UnityEngine.UILineInfo[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly verts: any;
    readonly characters: any;
    readonly lines: any;
    readonly rectExtents: UnityEngine.Rect;
    readonly vertexCount: number;
    readonly characterCount: number;
    readonly characterCountVisible: number;
    readonly lineCount: number;
    readonly fontSizeUsedForBestFit: number;
    // fields
  }
}
