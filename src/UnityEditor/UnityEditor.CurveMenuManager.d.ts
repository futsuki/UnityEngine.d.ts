declare namespace UnityEditor {
  class CurveMenuManager extends System.Object {
    // constructors
    constructor(updater: UnityEditor.CurveUpdater);
    // methods
    AddTangentMenuItems(menu: UnityEditor.GenericMenu, keyList: UnityEditor.KeyIdentifier[]): void;
    SetClampedAuto(keysToSet: any): void;
    SetAuto(keysToSet: any): void;
    SetEditable(keysToSet: any): void;
    SetFlat(keysToSet: any): void;
    SetBoth(mode: UnityEditor.AnimationUtility.TangentMode, keysToSet: UnityEditor.KeyIdentifier[]): void;
    Flatten(keysToSet: UnityEditor.KeyIdentifier[]): void;
    SetBroken(_keysToSet: any): void;
    SetLeftEditable(keysToSet: any): void;
    SetLeftLinear(keysToSet: any): void;
    SetLeftConstant(keysToSet: any): void;
    SetRightEditable(keysToSet: any): void;
    SetRightLinear(keysToSet: any): void;
    SetRightConstant(keysToSet: any): void;
    SetBothEditable(keysToSet: any): void;
    SetBothLinear(keysToSet: any): void;
    SetBothConstant(keysToSet: any): void;
    SetTangent(leftRight: number, mode: UnityEditor.AnimationUtility.TangentMode, keysToSet: UnityEditor.KeyIdentifier[]): void;
    // properties
    // fields
  }
}
