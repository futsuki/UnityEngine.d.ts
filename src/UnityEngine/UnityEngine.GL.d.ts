declare namespace UnityEngine {
  class GL extends System.Object {
    // constructors
    constructor();
    // methods
    static Vertex3(x: number, y: number, z: number): void;
    static Vertex(v: UnityEngine.Vector3): void;
    static Color(c: UnityEngine.Color): void;
    static TexCoord(v: UnityEngine.Vector3): void;
    static TexCoord2(x: number, y: number): void;
    static TexCoord3(x: number, y: number, z: number): void;
    static MultiTexCoord2(unit: number, x: number, y: number): void;
    static MultiTexCoord3(unit: number, x: number, y: number, z: number): void;
    static MultiTexCoord(unit: number, v: UnityEngine.Vector3): void;
    static Begin(mode: number): void;
    static End(): void;
    static LoadOrtho(): void;
    static LoadPixelMatrix(): void;
    static LoadPixelMatrix(left: number, right: number, bottom: number, top: number): void;
    static Viewport(pixelRect: UnityEngine.Rect): void;
    static LoadProjectionMatrix(mat: UnityEngine.Matrix4x4): void;
    static LoadIdentity(): void;
    static MultMatrix(mat: UnityEngine.Matrix4x4): void;
    static PushMatrix(): void;
    static PopMatrix(): void;
    static GetGPUProjectionMatrix(proj: UnityEngine.Matrix4x4, renderIntoTexture: boolean): UnityEngine.Matrix4x4;
    static SetRevertBackfacing(revertBackFaces: boolean): void;
    static Clear(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color): void;
    static Clear(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number): void;
    static ClearWithSkybox(clearDepth: boolean, camera: UnityEngine.Camera): void;
    static Flush(): void;
    static InvalidateState(): void;
    static IssuePluginEvent(eventID: number): void;
    static IssuePluginEvent(callback: any, eventID: number): void;
    static RenderTargetBarrier(): void;
    // properties
    static modelview: UnityEngine.Matrix4x4;
    static wireframe: boolean;
    static sRGBWrite: boolean;
    static invertCulling: boolean;
    // fields
    static TRIANGLES: number;
    static TRIANGLE_STRIP: number;
    static QUADS: number;
    static LINES: number;
  }
}
