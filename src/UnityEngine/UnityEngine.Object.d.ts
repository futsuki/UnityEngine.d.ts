declare namespace UnityEngine {
  class Object {
    // constructors
    constructor();
    // methods
    static Destroy(obj: UnityEngine.Object, t: number): any;
    static Destroy(obj: UnityEngine.Object): any;
    static DestroyImmediate(obj: UnityEngine.Object, allowDestroyingAssets: boolean): any;
    static DestroyImmediate(obj: UnityEngine.Object): any;
    static FindObjectsOfType(type: any): UnityEngine.Object[];
    static DontDestroyOnLoad(target: UnityEngine.Object): any;
    static DestroyObject(obj: UnityEngine.Object, t: number): any;
    static DestroyObject(obj: UnityEngine.Object): any;
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
    GetType(): any;
    // properties
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
