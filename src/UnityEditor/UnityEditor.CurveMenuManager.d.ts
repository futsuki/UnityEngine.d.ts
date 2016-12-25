declare namespace UnityEditor {
  class CurveMenuManager {
    // constructors
    constructor(updater: UnityEditor.CurveUpdater);
    // methods
    AddTangentMenuItems(menu: UnityEditor.GenericMenu, keyList: any): any;
    SetClampedAuto(keysToSet: any): any;
    SetAuto(keysToSet: any): any;
    SetEditable(keysToSet: any): any;
    SetFlat(keysToSet: any): any;
    SetBoth(mode: UnityEditor.AnimationUtility.TangentMode, keysToSet: any): any;
    Flatten(keysToSet: any): any;
    SetBroken(_keysToSet: any): any;
    SetLeftEditable(keysToSet: any): any;
    SetLeftLinear(keysToSet: any): any;
    SetLeftConstant(keysToSet: any): any;
    SetRightEditable(keysToSet: any): any;
    SetRightLinear(keysToSet: any): any;
    SetRightConstant(keysToSet: any): any;
    SetBothEditable(keysToSet: any): any;
    SetBothLinear(keysToSet: any): any;
    SetBothConstant(keysToSet: any): any;
    SetTangent(leftRight: number, mode: UnityEditor.AnimationUtility.TangentMode, keysToSet: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
