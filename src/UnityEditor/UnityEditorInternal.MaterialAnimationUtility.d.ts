declare namespace UnityEditorInternal {
  class MaterialAnimationUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static IsAnimated(materialProp: UnityEditor.MaterialProperty, target: any): boolean;
    static SetupMaterialPropertyBlock(materialProp: UnityEditor.MaterialProperty, changedMask: number, target: any): void;
    static ApplyMaterialModificationToAnimationRecording(materialProp: UnityEditor.MaterialProperty, changedMask: number, target: any, oldValue: any): boolean;
    // properties
    // fields
  }
}
