declare namespace UnityEditor {
  class iOSDeviceRequirementGroup extends System.Object {
    // constructors
    protected constructor();
    // methods
    RemoveAt(index: number): void;
    Add(requirement: UnityEditor.iOSDeviceRequirement): void;
    // properties
    readonly count: number;
    get_Item(index: number): UnityEditor.iOSDeviceRequirement;
    set_Item(index: number, value: UnityEditor.iOSDeviceRequirement): void;
    // fields
  }
}
