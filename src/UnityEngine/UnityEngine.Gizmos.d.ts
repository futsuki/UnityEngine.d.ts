declare namespace UnityEngine {
  class Gizmos extends System.Object {
    // constructors
    constructor();
    // methods
    static DrawRay(r: UnityEngine.Ray): void;
    static DrawRay(from: UnityEngine.Vector3, direction: UnityEngine.Vector3): void;
    static DrawLine(from: UnityEngine.Vector3, to: UnityEngine.Vector3): void;
    static DrawWireSphere(center: UnityEngine.Vector3, radius: number): void;
    static DrawSphere(center: UnityEngine.Vector3, radius: number): void;
    static DrawWireCube(center: UnityEngine.Vector3, size: UnityEngine.Vector3): void;
    static DrawCube(center: UnityEngine.Vector3, size: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number): void;
    static DrawIcon(center: UnityEngine.Vector3, name: string, allowScaling: boolean): void;
    static DrawIcon(center: UnityEngine.Vector3, name: string): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, mat: UnityEngine.Material): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number): void;
    static DrawFrustum(center: UnityEngine.Vector3, fov: number, maxRange: number, minRange: number, aspect: number): void;
    // properties
    static color: UnityEngine.Color;
    static matrix: UnityEngine.Matrix4x4;
    // fields
  }
}
