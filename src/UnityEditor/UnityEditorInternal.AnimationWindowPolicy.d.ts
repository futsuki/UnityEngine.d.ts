declare namespace UnityEditorInternal {
  class AnimationWindowPolicy {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    triggerFramingOnSelection: boolean;
    unitialized: boolean;
    SynchronizeGeometry: UnityEditorInternal.AnimationWindowPolicy.SynchronizeGeometryDelegate;
    SynchronizeFrameRate: UnityEditorInternal.AnimationWindowPolicy.SynchronizeFrameRateDelegate;
    SynchronizeCurrentTime: UnityEditorInternal.AnimationWindowPolicy.SynchronizeCurrentTimeDelegate;
    SynchronizeZoomableArea: UnityEditorInternal.AnimationWindowPolicy.SynchronizeZoomableAreaDelegate;
    OnGeometryChange: UnityEditorInternal.AnimationWindowPolicy.OnGeometryChangeDelegate;
    OnCurrentTimeChange: UnityEditorInternal.AnimationWindowPolicy.OnCurrentTimeChangeDelegate;
    OnZoomableAreaChange: UnityEditorInternal.AnimationWindowPolicy.OnZoomableAreaChangeDelegate;
  }
}
