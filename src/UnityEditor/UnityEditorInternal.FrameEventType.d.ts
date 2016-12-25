declare namespace UnityEditorInternal {
  class FrameEventType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static ClearNone: UnityEditorInternal.FrameEventType;
    static ClearColor: UnityEditorInternal.FrameEventType;
    static ClearDepth: UnityEditorInternal.FrameEventType;
    static ClearColorDepth: UnityEditorInternal.FrameEventType;
    static ClearStencil: UnityEditorInternal.FrameEventType;
    static ClearColorStencil: UnityEditorInternal.FrameEventType;
    static ClearDepthStencil: UnityEditorInternal.FrameEventType;
    static ClearAll: UnityEditorInternal.FrameEventType;
    static SetRenderTarget: UnityEditorInternal.FrameEventType;
    static ResolveRT: UnityEditorInternal.FrameEventType;
    static ResolveDepth: UnityEditorInternal.FrameEventType;
    static GrabIntoRT: UnityEditorInternal.FrameEventType;
    static StaticBatch: UnityEditorInternal.FrameEventType;
    static DynamicBatch: UnityEditorInternal.FrameEventType;
    static Mesh: UnityEditorInternal.FrameEventType;
    static DynamicGeometry: UnityEditorInternal.FrameEventType;
    static GLDraw: UnityEditorInternal.FrameEventType;
    static SkinOnGPU: UnityEditorInternal.FrameEventType;
    static DrawProcedural: UnityEditorInternal.FrameEventType;
    static ComputeDispatch: UnityEditorInternal.FrameEventType;
    static PluginEvent: UnityEditorInternal.FrameEventType;
    static InstancedMesh: UnityEditorInternal.FrameEventType;
  }
}
