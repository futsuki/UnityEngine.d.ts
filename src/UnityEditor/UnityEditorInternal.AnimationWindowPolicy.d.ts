declare namespace UnityEditorInternal {
  class AnimationWindowPolicy extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    triggerFramingOnSelection: boolean;
    unitialized: boolean;
    SynchronizeGeometry: ((sizes: any, minSizes: any) => boolean);
    SynchronizeFrameRate: ((frameRate: any) => boolean);
    SynchronizeCurrentTime: ((time: any) => boolean);
    SynchronizeZoomableArea: ((horizontalScale: any, horizontalTranslation: any) => boolean);
    OnGeometryChange: ((sizes: number[]) => void);
    OnCurrentTimeChange: ((time: number) => void);
    OnZoomableAreaChange: ((horizontalScale: number, horizontalTranslation: number) => void);
  }
}
