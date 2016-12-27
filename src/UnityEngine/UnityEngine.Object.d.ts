declare namespace UnityEngine {
  class Object extends System.Object {
    // constructors
    constructor();
    // methods
    static Destroy(obj: UnityEngine.Object, t: number): void;
    static Destroy(obj: UnityEngine.Object): void;
    static DestroyImmediate(obj: UnityEngine.Object, allowDestroyingAssets: boolean): void;
    static DestroyImmediate(obj: UnityEngine.Object): void;
    static FindObjectsOfType(type: any): UnityEngine.Object[];
    static DontDestroyOnLoad(target: UnityEngine.Object): void;
    static DestroyObject(obj: UnityEngine.Object, t: number): void;
    static DestroyObject(obj: UnityEngine.Object): void;
    static FindSceneObjectsOfType(type: any): UnityEngine.Object[];
    static FindObjectsOfTypeIncludingAssets(type: any): UnityEngine.Object[];
    static FindObjectsOfTypeAll(type: any): UnityEngine.Object[];
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, instantiateInWorldSpace: boolean): UnityEngine.Object;
    static FindObjectOfType(type: any): UnityEngine.Object;
    // properties
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
