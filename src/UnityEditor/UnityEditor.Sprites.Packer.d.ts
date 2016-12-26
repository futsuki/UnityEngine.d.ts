declare namespace UnityEditor.Sprites {
  class Packer {
    // constructors
    constructor();
    // methods
    static GetTexturesForAtlas(atlasName: string): any[];
    static GetAlphaTexturesForAtlas(atlasName: string): any[];
    static RebuildAtlasCacheIfNeeded(target: UnityEditor.BuildTarget, displayProgressBar: boolean, execution: UnityEditor.Sprites.Packer.Execution): void;
    static RebuildAtlasCacheIfNeeded(target: UnityEditor.BuildTarget, displayProgressBar: boolean): void;
    static RebuildAtlasCacheIfNeeded(target: UnityEditor.BuildTarget): void;
    static GetAtlasDataForSprite(sprite: any, atlasName: any, atlasTexture: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly atlasNames: string[];
    static readonly Policies: string[];
    static SelectedPolicy: string;
    // fields
    static kDefaultPolicy: string;
  }
}
