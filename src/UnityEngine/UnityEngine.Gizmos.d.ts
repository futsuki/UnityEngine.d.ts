declare namespace UnityEngine {
  class Gizmos {
    // constructors
    constructor();
    // methods
    static DrawRay(r: UnityEngine.Ray): any;
    static DrawRay(from: UnityEngine.Vector3, direction: UnityEngine.Vector3): any;
    static DrawLine(from: UnityEngine.Vector3, to: UnityEngine.Vector3): any;
    static DrawWireSphere(center: UnityEngine.Vector3, radius: number): any;
    static DrawSphere(center: UnityEngine.Vector3, radius: number): any;
    static DrawWireCube(center: UnityEngine.Vector3, size: UnityEngine.Vector3): any;
    static DrawCube(center: UnityEngine.Vector3, size: UnityEngine.Vector3): any;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): any;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3): any;
    static DrawMesh(mesh: UnityEngine.Mesh): any;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): any;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): any;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): any;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3): any;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3): any;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number): any;
    static DrawIcon(center: UnityEngine.Vector3, name: string, allowScaling: boolean): any;
    static DrawIcon(center: UnityEngine.Vector3, name: string): any;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture): any;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, mat: UnityEngine.Material): any;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material): any;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number): any;
    static DrawFrustum(center: UnityEngine.Vector3, fov: number, maxRange: number, minRange: number, aspect: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static color: UnityEngine.Color;
    static matrix: UnityEngine.Matrix4x4;
    // fields
  }
}
