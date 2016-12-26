declare namespace UnityEditor {
  class TrueTypeFontImporter {
    // constructors
    constructor();
    // methods
    GenerateEditableFont(path: string): any;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): void;
    SaveAndReimport(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
