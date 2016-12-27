declare namespace UnityEditor {
  class MaterialProperty extends System.Object {
    // constructors
    constructor();
    // methods
    ReadFromMaterialPropertyBlock(block: any): void;
    WriteToMaterialPropertyBlock(materialblock: any, changedPropertyMask: number): void;
    // properties
    readonly targets: UnityEngine.Object[];
    readonly type: UnityEditor.MaterialProperty.PropType;
    readonly name: string;
    readonly displayName: string;
    readonly flags: UnityEditor.MaterialProperty.PropFlags;
    readonly textureDimension: any;
    readonly rangeLimits: any;
    readonly hasMixedValue: boolean;
    applyPropertyCallback: ((prop: UnityEditor.MaterialProperty, changeMask: number, previousValue: any) => boolean);
    colorValue: any;
    vectorValue: any;
    floatValue: number;
    textureValue: any;
    textureScaleAndOffset: any;
    // fields
  }
}
