declare namespace UnityEditorInternal {
  class SpriteEditorMenuSetting {
    // constructors
    constructor();
    // methods
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    gridCellCount: any;
    gridSpriteSize: any;
    gridSpriteOffset: any;
    gridSpritePadding: any;
    pivot: any;
    autoSlicingMethod: number;
    spriteAlignment: number;
    slicingType: UnityEditorInternal.SpriteEditorMenuSetting.SlicingType;
  }
}
