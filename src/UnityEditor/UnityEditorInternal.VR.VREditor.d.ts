declare namespace UnityEditorInternal.VR {
  class VREditor {
    // constructors
    constructor();
    // methods
    static GetVREnabled(targetGroup: UnityEditor.BuildTargetGroup): boolean;
    static SetVREnabled(targetGroup: UnityEditor.BuildTargetGroup, value: boolean): any;
    static GetVREnabledDevices(targetGroup: UnityEditor.BuildTargetGroup): string[];
    static SetVREnabledDevices(targetGroup: UnityEditor.BuildTargetGroup, devices: string[]): any;
    static GetEnabledVRDeviceInfo(targetGroup: UnityEditor.BuildTargetGroup): UnityEditorInternal.VR.VRDeviceInfoEditor[];
    static GetEnabledVRDeviceInfo(target: UnityEditor.BuildTarget): UnityEditorInternal.VR.VRDeviceInfoEditor[];
    static GetAllVRDeviceInfo(targetGroup: UnityEditor.BuildTargetGroup): UnityEditorInternal.VR.VRDeviceInfoEditor[];
    static GetAllVRDeviceInfoByTarget(target: UnityEditor.BuildTarget): UnityEditorInternal.VR.VRDeviceInfoEditor[];
    static GetVREnabledOnTargetGroup(targetGroup: UnityEditor.BuildTargetGroup): boolean;
    static SetVREnabledOnTargetGroup(targetGroup: UnityEditor.BuildTargetGroup, value: boolean): any;
    static GetVREnabledDevicesOnTargetGroup(targetGroup: UnityEditor.BuildTargetGroup): string[];
    static GetVREnabledDevicesOnTarget(target: UnityEditor.BuildTarget): string[];
    static SetVREnabledDevicesOnTargetGroup(targetGroup: UnityEditor.BuildTargetGroup, devices: string[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
