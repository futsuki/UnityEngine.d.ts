declare namespace UnityEditor {
  class IFlexibleMenuItemProvider {
    // constructors
    protected constructor();
    // methods
    Count(): number;
    GetItem(index: number): any;
    Add(obj: any): number;
    Replace(index: number, newPresetObject: any): void;
    Remove(index: number): void;
    Create(): any;
    Move(index: number, destIndex: number, insertAfterDestIndex: boolean): void;
    GetName(index: number): string;
    IsModificationAllowed(index: number): boolean;
    GetSeperatorIndices(): number[];
    // properties
    // fields
  }
}
