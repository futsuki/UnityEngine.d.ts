declare namespace UnityEditor {
  class IGameViewSizeMenuUser {
    // constructors
    protected constructor();
    // methods
    SizeSelectionCallback(indexClicked: number, objectSelected: any): void;
    // properties
    lowResolutionForAspectRatios: boolean;
    readonly forceLowResolutionAspectRatios: boolean;
    readonly showLowResolutionToggle: boolean;
    // fields
  }
}
