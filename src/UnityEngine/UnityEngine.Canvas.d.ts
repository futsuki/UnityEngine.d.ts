declare namespace UnityEngine {
  class Canvas extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    static GetDefaultCanvasMaterial(): UnityEngine.Material;
    static GetETC1SupportedCanvasMaterial(): UnityEngine.Material;
    static GetDefaultCanvasTextMaterial(): UnityEngine.Material;
    static ForceUpdateCanvases(): void;
    // properties
    renderMode: UnityEngine.RenderMode;
    readonly isRootCanvas: boolean;
    worldCamera: UnityEngine.Camera;
    readonly pixelRect: UnityEngine.Rect;
    scaleFactor: number;
    referencePixelsPerUnit: number;
    overridePixelPerfect: boolean;
    pixelPerfect: boolean;
    planeDistance: number;
    readonly renderOrder: number;
    overrideSorting: boolean;
    sortingOrder: number;
    targetDisplay: number;
    sortingGridNormalizedSize: number;
    normalizedSortingGridSize: number;
    sortingLayerID: number;
    readonly cachedSortingLayerValue: number;
    sortingLayerName: string;
    readonly rootCanvas: UnityEngine.Canvas;
    // fields
  }
}
