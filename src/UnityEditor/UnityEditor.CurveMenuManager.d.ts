declare namespace UnityEditor {
  class CurveMenuManager {
    // constructors
    constructor(updater: UnityEditor.CurveUpdater);
    // methods
    AddTangentMenuItems(menu: UnityEditor.GenericMenu, keyList: any): void;
    SetClampedAuto(keysToSet: any): void;
    SetAuto(keysToSet: any): void;
    SetEditable(keysToSet: any): void;
    SetFlat(keysToSet: any): void;
    SetBoth(mode: UnityEditor.AnimationUtility.TangentMode, keysToSet: any): void;
    Flatten(keysToSet: any): void;
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
    SetTangent(leftRight: number, mode: UnityEditor.AnimationUtility.TangentMode, keysToSet: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
