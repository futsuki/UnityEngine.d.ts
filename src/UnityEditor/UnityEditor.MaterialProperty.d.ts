declare namespace UnityEditor {
  class MaterialProperty {
    // constructors
    constructor();
    // methods
    ReadFromMaterialPropertyBlock(block: any): any;
    WriteToMaterialPropertyBlock(materialblock: any, changedPropertyMask: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly targets: any[];
    readonly type: UnityEditor.MaterialProperty.PropType;
    readonly name: string;
    readonly displayName: string;
    readonly flags: UnityEditor.MaterialProperty.PropFlags;
    readonly textureDimension: any;
    readonly rangeLimits: any;
    readonly hasMixedValue: boolean;
    applyPropertyCallback: UnityEditor.MaterialProperty.ApplyPropertyCallback;
    colorValue: any;
    vectorValue: any;
    floatValue: number;
    textureValue: any;
    textureScaleAndOffset: any;
    // fields
  }
}