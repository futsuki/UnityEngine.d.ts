declare namespace UnityEngine {
  class Font {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    static GetOSInstalledFontNames(): string[];
    static CreateDynamicFontFromOSFont(fontname: string, size: number): UnityEngine.Font;
    static CreateDynamicFontFromOSFont(fontnames: string[], size: number): UnityEngine.Font;
    HasCharacter(c: any): boolean;
    RequestCharactersInTexture(characters: string, size: number, style: UnityEngine.FontStyle): void;
    RequestCharactersInTexture(characters: string, size: number): void;
    RequestCharactersInTexture(characters: string): void;
    static GetMaxVertsForString(str: string): number;
    GetCharacterInfo(ch: any, info: any, size: number, style: UnityEngine.FontStyle): boolean;
    GetCharacterInfo(ch: any, info: any, size: number): boolean;
    GetCharacterInfo(ch: any, info: any): boolean;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    material: UnityEngine.Material;
    fontNames: string[];
    characterInfo: UnityEngine.CharacterInfo[];
    textureRebuildCallback: (() => void);
    readonly dynamic: boolean;
    readonly ascent: number;
    readonly lineHeight: number;
    readonly fontSize: number;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
