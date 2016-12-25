declare namespace UnityEngine {
  class GL {
    // constructors
    constructor();
    // methods
    static Vertex3(x: number, y: number, z: number): any;
    static Vertex(v: UnityEngine.Vector3): any;
    static Color(c: UnityEngine.Color): any;
    static TexCoord(v: UnityEngine.Vector3): any;
    static TexCoord2(x: number, y: number): any;
    static TexCoord3(x: number, y: number, z: number): any;
    static MultiTexCoord2(unit: number, x: number, y: number): any;
    static MultiTexCoord3(unit: number, x: number, y: number, z: number): any;
    static MultiTexCoord(unit: number, v: UnityEngine.Vector3): any;
    static Begin(mode: number): any;
    static End(): any;
    static LoadOrtho(): any;
    static LoadPixelMatrix(): any;
    static LoadPixelMatrix(left: number, right: number, bottom: number, top: number): any;
    static Viewport(pixelRect: UnityEngine.Rect): any;
    static LoadProjectionMatrix(mat: UnityEngine.Matrix4x4): any;
    static LoadIdentity(): any;
    static MultMatrix(mat: UnityEngine.Matrix4x4): any;
    static PushMatrix(): any;
    static PopMatrix(): any;
    static GetGPUProjectionMatrix(proj: UnityEngine.Matrix4x4, renderIntoTexture: boolean): UnityEngine.Matrix4x4;
    static SetRevertBackfacing(revertBackFaces: boolean): any;
    static Clear(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color): any;
    static Clear(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number): any;
    static ClearWithSkybox(clearDepth: boolean, camera: UnityEngine.Camera): any;
    static Flush(): any;
    static InvalidateState(): any;
    static IssuePluginEvent(eventID: number): any;
    static IssuePluginEvent(callback: any, eventID: number): any;
    static RenderTargetBarrier(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
