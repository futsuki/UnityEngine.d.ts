declare namespace UnityEngine {
  class Transform extends UnityEngine.Component {
    // constructors
    protected constructor();
    // methods
    SetParent(parent: UnityEngine.Transform): void;
    SetParent(parent: UnityEngine.Transform, worldPositionStays: boolean): void;
    Translate(translation: UnityEngine.Vector3): void;
    Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space): void;
    Translate(x: number, y: number, z: number): void;
    Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Space): void;
    Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform): void;
    Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Transform): void;
    Rotate(eulerAngles: UnityEngine.Vector3): void;
    Rotate(eulerAngles: UnityEngine.Vector3, relativeTo: UnityEngine.Space): void;
    Rotate(xAngle: number, yAngle: number, zAngle: number): void;
    Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space): void;
    Rotate(axis: UnityEngine.Vector3, angle: number): void;
    Rotate(axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space): void;
    RotateAround(point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number): void;
    RotateAround(axis: UnityEngine.Vector3, angle: number): void;
    LookAt(target: UnityEngine.Transform): void;
    LookAt(target: UnityEngine.Transform, worldUp: UnityEngine.Vector3): void;
    LookAt(worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3): void;
    LookAt(worldPosition: UnityEngine.Vector3): void;
    TransformDirection(direction: UnityEngine.Vector3): UnityEngine.Vector3;
    TransformDirection(x: number, y: number, z: number): UnityEngine.Vector3;
    InverseTransformDirection(direction: UnityEngine.Vector3): UnityEngine.Vector3;
    InverseTransformDirection(x: number, y: number, z: number): UnityEngine.Vector3;
    TransformVector(vector: UnityEngine.Vector3): UnityEngine.Vector3;
    TransformVector(x: number, y: number, z: number): UnityEngine.Vector3;
    InverseTransformVector(vector: UnityEngine.Vector3): UnityEngine.Vector3;
    InverseTransformVector(x: number, y: number, z: number): UnityEngine.Vector3;
    TransformPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    TransformPoint(x: number, y: number, z: number): UnityEngine.Vector3;
    InverseTransformPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    InverseTransformPoint(x: number, y: number, z: number): UnityEngine.Vector3;
    DetachChildren(): void;
    SetAsFirstSibling(): void;
    SetAsLastSibling(): void;
    SetSiblingIndex(index: number): void;
    GetSiblingIndex(): number;
    Find(name: string): UnityEngine.Transform;
    IsChildOf(parent: UnityEngine.Transform): boolean;
    FindChild(name: string): UnityEngine.Transform;
    GetEnumerator(): any;
    RotateAroundLocal(axis: UnityEngine.Vector3, angle: number): void;
    GetChild(index: number): UnityEngine.Transform;
    GetChildCount(): number;
    // properties
    position: UnityEngine.Vector3;
    localPosition: UnityEngine.Vector3;
    eulerAngles: UnityEngine.Vector3;
    localEulerAngles: UnityEngine.Vector3;
    right: UnityEngine.Vector3;
    up: UnityEngine.Vector3;
    forward: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    localRotation: UnityEngine.Quaternion;
    localScale: UnityEngine.Vector3;
    parent: UnityEngine.Transform;
    readonly worldToLocalMatrix: UnityEngine.Matrix4x4;
    readonly localToWorldMatrix: UnityEngine.Matrix4x4;
    readonly root: UnityEngine.Transform;
    readonly childCount: number;
    readonly lossyScale: UnityEngine.Vector3;
    hasChanged: boolean;
    hierarchyCapacity: number;
    readonly hierarchyCount: number;
    // fields
  }
}
