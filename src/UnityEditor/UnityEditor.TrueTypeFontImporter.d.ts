declare namespace UnityEditor {
  class TrueTypeFontImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    GenerateEditableFont(path: string): any;
    // properties
    fontSize: number;
    fontTextureCase: UnityEditor.FontTextureCase;
    includeFontData: boolean;
    ascentCalculationMode: UnityEditor.AscentCalculationMode;
    fontNames: string[];
    fontReferences: any[];
    customCharacters: string;
    readonly fontTTFName: string;
    characterSpacing: number;
    characterPadding: number;
    fontRenderingMode: UnityEditor.FontRenderingMode;
    // fields
  }
}
