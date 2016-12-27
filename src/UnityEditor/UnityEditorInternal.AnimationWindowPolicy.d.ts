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
    SynchronizeGeometry: ((any, any) => boolean);
    SynchronizeFrameRate: ((any) => boolean);
    SynchronizeCurrentTime: ((any) => boolean);
    SynchronizeZoomableArea: ((any, any) => boolean);
    OnGeometryChange: ((number[]) => void);
    OnCurrentTimeChange: ((number) => void);
    OnZoomableAreaChange: ((number, number) => void);
  }
}
