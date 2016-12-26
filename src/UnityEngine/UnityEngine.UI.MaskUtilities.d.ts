declare namespace UnityEngine.UI {
  class MaskUtilities {
    // constructors
    constructor();
    // methods
    static Notify2DMaskStateChanged(mask: UnityEngine.Component): void;
    static NotifyStencilStateChanged(mask: UnityEngine.Component): void;
    static FindRootSortOverrideCanvas(start: UnityEngine.Transform): UnityEngine.Transform;
    static GetStencilDepth(transform: UnityEngine.Transform, stopAfter: UnityEngine.Transform): number;
    static IsDescendantOrSelf(father: UnityEngine.Transform, child: UnityEngine.Transform): boolean;
    static GetRectMaskForClippable(clippable: UnityEngine.UI.IClippable): UnityEngine.UI.RectMask2D;
    static GetRectMasksForClip(clipper: UnityEngine.UI.RectMask2D, masks: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
