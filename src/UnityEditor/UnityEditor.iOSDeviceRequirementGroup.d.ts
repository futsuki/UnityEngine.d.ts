declare namespace UnityEditor {
  class iOSDeviceRequirementGroup {
    // constructors
    private constructor();
    // methods
    RemoveAt(index: number): void;
    Add(requirement: UnityEditor.iOSDeviceRequirement): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly count: number;
    get_Item(index: number): UnityEditor.iOSDeviceRequirement;
    set_Item(index: number, value: UnityEditor.iOSDeviceRequirement): void;
    // fields
  }
}
