declare namespace UnityEditorInternal {
  class MaterialAnimationUtility {
    // constructors
    private constructor();
    // methods
    static IsAnimated(materialProp: UnityEditor.MaterialProperty, target: any): boolean;
    static SetupMaterialPropertyBlock(materialProp: UnityEditor.MaterialProperty, changedMask: number, target: any): any;
    static ApplyMaterialModificationToAnimationRecording(materialProp: UnityEditor.MaterialProperty, changedMask: number, target: any, oldValue: any): boolean;
    // properties
    // fields
  }
}
