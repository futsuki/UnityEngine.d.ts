declare namespace UnityEditor {
  class GameViewSizesMenuItemProvider {
    // constructors
    constructor(gameViewSizeGroupType: UnityEditor.GameViewSizeGroupType);
    // methods
    Count(): number;
    GetItem(index: number): any;
    Add(obj: any): number;
    Replace(index: number, obj: any): void;
    Remove(index: number): void;
    Create(): any;
    Move(index: number, destIndex: number, insertAfterDestIndex: boolean): void;
    GetName(index: number): string;
    IsModificationAllowed(index: number): boolean;
    GetSeperatorIndices(): number[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
